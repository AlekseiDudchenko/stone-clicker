// Run with Playwright installed. BROWSER_EXECUTABLE optionally selects Chromium.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  const file = path.join(root, pathname === '/' ? 'index.html' : pathname);
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.png') ? 'image/png' : 'text/html');
  try { res.end(fs.readFileSync(file)); } catch { res.writeHead(404).end(); }
});
(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const browser = await chromium.launch({ headless: true, executablePath: process.env.BROWSER_EXECUTABLE || undefined, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));
    page.on('response', r => { if (r.status() >= 400 && !r.url().endsWith('favicon.ico')) errors.push(`${r.status()} ${r.url()}`); });
    await page.addInitScript(() => {
      const interval = window.setInterval;
      window.testIntervals = [];
      window.setInterval = (...args) => { const id = interval(...args); window.testIntervals.push(id); return id; };
    });
    const url = `http://127.0.0.1:${server.address().port}`;
    const freeze = () => page.evaluate(() => window.testIntervals.forEach(clearInterval));
    const click = selector => page.locator(selector).click();
    await page.goto(url); await freeze();
    assert.match(await page.locator('#goal-title').innerText(), /Sales/);
    assert.equal(await page.locator('#recruit-sales').isDisabled(), true);
    // Normal clicks damage the rock and award a persistent achievement.
    for (let i = 0; i < 6; i++) await click('#stone');
    assert.equal(await page.locator('#stone').getAttribute('data-crack-stage'), '1');
    for (let i = 0; i < 14; i++) await click('#stone');
    assert.equal(await page.evaluate(() => state.rocksBroken), 1);
    assert.equal(await page.evaluate(() => state.stones), 30);
    assert.equal(await page.locator('#rock-health').innerText(), '23 / 23');
    await page.evaluate(() => { gainStones(2000); render(); });
    for (let i = 0; i < 3; i++) await click('#hire-person');
    assert.equal(await page.evaluate(() => state.people), 4);
    assert.equal(await page.locator('#recruit-sales').isEnabled(), true);
    assert.match(await page.locator('#goal-title').innerText(), /Diamond Creators/);
    await click('#recruit-sales');
    for (const research of ['tools', 'automation', 'fracture']) await click(`[data-research="${research}"]`);
    assert.equal(await page.evaluate(() => clickPower()), 1.5);
    assert.equal(await page.locator('#per-click-value').innerText(), '1.50');
    const beforeBuild = await page.evaluate(() => state.stones);
    await click('[data-project="camp"]');
    assert.equal(await page.evaluate(() => state.stones), beforeBuild - 150);
    assert.equal(await page.locator('[data-building="camp"]').getAttribute('class'), 'scene-building scene-building--built');
    assert.equal(await page.locator('[data-project="camp"]').isDisabled(), true);
    assert.equal(await page.locator('[data-project="well"]').isDisabled(), true);
    // A full set adds a bonus without blocking progress to later groups.
    for (let i = 0; i < 4; i++) await click('#hire-person');
    const multiplier = await page.evaluate(() => productionMultiplier(state));
    assert.ok(Math.abs(multiplier - 1.25 * 1.2 * 1.1) < 1e-10);
    assert.equal(await page.evaluate(() => state.people), 8);
    // Online and offline income must use precisely the same multiplier.
    const income = await page.evaluate(() => {
      const rate = stonesPerSecond(); const before = state.stones;
      for (const key of Object.keys(state)) if (key.endsWith('ProgressMs')) state[key] = 0;
      lastTick = Date.now() - 1000; tick();
      const online = state.stones - before;
      const offlineBefore = state.stones;
      state.lastSaved = Date.now() - 10000; applyOfflineProgress();
      return { rate, online, offline: state.stones - offlineBefore };
    });
    assert.ok(Math.abs(income.online - income.rate) < .001);
    assert.ok(Math.abs(income.offline - income.rate * 10) < .001);
    // Save/load retains rock damage, construction and unique achievements.
    await click('#stone');
    const beforeReload = await page.evaluate(() => { saveState(); return JSON.parse(JSON.stringify(state)); });
    await page.reload(); await freeze();
    const afterReload = await page.evaluate(() => JSON.parse(JSON.stringify(state)));
    for (const key of ['rocksBroken', 'rockDamage', 'research', 'buildings']) assert.deepEqual(afterReload[key], beforeReload[key]);
    assert.deepEqual([...afterReload.achievements].sort(), [...beforeReload.achievements].sort());
    assert.equal(new Set(afterReload.achievements).size, afterReload.achievements.length);
    // Exercise all biome unlocks and construction via the actual purchase buttons.
    await page.evaluate(() => { state.stones = 2000000; state.totalStones = 2000000; render(); });
    const tiers = ['recruit-sales', 'invite-creator', 'build-water', 'hire-digger', 'plant-cactus', 'buy-tractor', 'open-hole', 'summon-storm', 'buy-jackhammer', 'buy-cement-mixer'];
    for (const id of tiers) {
      const field = await page.evaluate(id => ({ 'recruit-sales':'sales','invite-creator':'creators','build-water':'waterSources','hire-digger':'diggers','plant-cactus':'cacti','buy-tractor':'tractors','open-hole':'holes','summon-storm':'storms','buy-jackhammer':'jackhammers','buy-cement-mixer':'cementMixers' })[id], id);
      while (await page.evaluate(field => state[field] < 4, field)) await click(`#${id}`);
    }
    for (const id of ['well', 'workshop', 'monument']) await click(`[data-project="${id}"]`);
    assert.equal(await page.evaluate(() => state.buildings.length), 4);
    assert.equal(await page.locator('.scene-building--built').count(), 4);
    assert.equal(await page.evaluate(() => state.achievements.includes('monument')), true);
    for (const lang of ['ru', 'de', 'en']) {
      await page.selectOption('#language-select', lang);
      assert.equal(await page.locator('html').getAttribute('lang'), lang);
      assert.doesNotMatch(await page.locator('#upgrade-choices').innerText(), /\{\w+\}/);
      assert.notEqual(await page.locator('[data-stone-skin="city"] span[data-i18n="citySkin"]').innerText(), 'citySkin');
    }
    await page.selectOption('#language-select', 'ru');
    await page.locator('#achievements-details').evaluate(el => { el.open = true; });
    await page.waitForTimeout(3600);
    await page.locator('.future-panel').evaluate(el => { el.scrollTop = 0; });
    const screenshots = process.env.SCREENSHOT_DIR;
    if (screenshots) {
      fs.mkdirSync(screenshots, { recursive: true });
      await page.screenshot({ path: path.join(screenshots, 'stone-desktop.png'), fullPage: true });
    }
    for (const width of [320, 390, 700, 900, 1440]) {
      await page.setViewportSize({ width, height: 844 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `overflow at ${width}`);
    }
    if (screenshots) {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.screenshot({ path: path.join(screenshots, 'stone-mobile.png'), fullPage: true });
    }
    // Existing save format migrates without losing cash, hires or click upgrades.
    await page.evaluate(() => { window.removeEventListener('beforeunload', saveState); localStorage.setItem(SAVE_KEY, JSON.stringify({ stones: 1234, totalStones: 4321, people: 8, sales: 2, clicks: 200, clickX2Level: 2, language: 'ru', lastSaved: Date.now() })); });
    await page.reload(); await freeze();
    assert.equal(await page.evaluate(() => state.stones), 1234);
    assert.equal(await page.evaluate(() => state.people), 8);
    assert.equal(await page.evaluate(() => state.sales), 2);
    assert.equal(await page.evaluate(() => state.clickX2Level), 2);
    assert.equal(await page.evaluate(() => state.research.tools), 0);
    assert.equal(await page.evaluate(() => state.buildings.length), 0);
    // Cancelled reset preserves state; confirmed reset clears every new system.
    page.once('dialog', d => d.dismiss()); await click('#reset-progress');
    assert.equal(await page.evaluate(() => state.people), 8);
    page.once('dialog', d => d.accept()); await click('#reset-progress');
    assert.equal(await page.evaluate(() => state.people), 1);
    assert.equal(await page.evaluate(() => state.achievements.length), 0);
    assert.equal(await page.evaluate(() => state.buildings.length), 0);
    assert.equal(await page.evaluate(() => state.rocksBroken), 0);
    assert.equal(await page.locator('#goal-count').innerText(), '1/4');
    assert.deepEqual(errors, []);
    console.log('Browser checks passed: damage, splitting, tier purchases, all research paths, construction, achievements, persistence, migration, online/offline parity, reset, three languages and five viewport widths.');
  } finally { await browser.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; }).finally(() => server.close());
