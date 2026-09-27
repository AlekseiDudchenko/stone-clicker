const SAVE_KEY = 'stone-clicker-save-v1';
const COST_GROWTH = 1.15;
const MAX_OFFLINE_SECONDS = 60 * 60 * 8;

const BUILDINGS = [
  { id: 'pebbler', name: 'Pebbler', icon: '🪨', baseCost: 15, rate: 0.1, description: 'Picks up pebbles nobody wanted.' },
  { id: 'miner', name: 'Miner', icon: '⛏️', baseCost: 100, rate: 1, description: 'Swings a pickaxe with enthusiasm.' },
  { id: 'quarry', name: 'Quarry', icon: '🏔️', baseCost: 1100, rate: 8, description: 'A big hole full of opportunity.' },
  { id: 'drill', name: 'Drill Rig', icon: '🛠️', baseCost: 12000, rate: 47, description: 'Bores deep into the bedrock.' },
  { id: 'golem', name: 'Stone Golem', icon: '🗿', baseCost: 130000, rate: 260, description: 'Made of stone, makes more stone.' },
  { id: 'volcano', name: 'Volcano', icon: '🌋', baseCost: 1400000, rate: 1400, description: 'Cooks fresh rock from magma.' },
  { id: 'meteor', name: 'Meteor Magnet', icon: '☄️', baseCost: 20000000, rate: 7800, description: 'Pulls asteroids out of the sky.' },
];

// Each upgrade unlocks once its requirement is met and applies a permanent effect.
const UPGRADES = [
  { id: 'gloves', name: 'Work Gloves', icon: '🧤', cost: 100, description: 'Clicking is twice as effective.', type: 'click', multiplier: 2, requires: { clicks: 20 } },
  { id: 'hammer', name: 'Sledgehammer', icon: '🔨', cost: 5000, description: 'Clicking is twice as effective.', type: 'click', multiplier: 2, requires: { clicks: 250 } },
  { id: 'dynamite', name: 'Dynamite', icon: '🧨', cost: 250000, description: 'Clicking is twice as effective.', type: 'click', multiplier: 2, requires: { clicks: 1000 } },
  { id: 'rockfist', name: 'Rock Fist', icon: '✊', cost: 10000, description: 'Each click also gains 1% of your stones per second.', type: 'clickRate', percent: 0.01, requires: { total: 5000 } },
  { id: 'pebbler-1', name: 'Sharper Eyes', icon: '👀', cost: 150, description: 'Pebblers are twice as efficient.', type: 'building', building: 'pebbler', multiplier: 2, requires: { pebbler: 1 } },
  { id: 'pebbler-2', name: 'Pebble Bags', icon: '🎒', cost: 1500, description: 'Pebblers are twice as efficient.', type: 'building', building: 'pebbler', multiplier: 2, requires: { pebbler: 10 } },
  { id: 'miner-1', name: 'Steel Pickaxes', icon: '⚒️', cost: 1000, description: 'Miners are twice as efficient.', type: 'building', building: 'miner', multiplier: 2, requires: { miner: 1 } },
  { id: 'miner-2', name: 'Helmet Lamps', icon: '💡', cost: 10000, description: 'Miners are twice as efficient.', type: 'building', building: 'miner', multiplier: 2, requires: { miner: 10 } },
  { id: 'quarry-1', name: 'Conveyor Belts', icon: '🏗️', cost: 11000, description: 'Quarries are twice as efficient.', type: 'building', building: 'quarry', multiplier: 2, requires: { quarry: 1 } },
  { id: 'quarry-2', name: 'Blasting Crews', icon: '💥', cost: 110000, description: 'Quarries are twice as efficient.', type: 'building', building: 'quarry', multiplier: 2, requires: { quarry: 10 } },
  { id: 'drill-1', name: 'Diamond Bits', icon: '💎', cost: 120000, description: 'Drill Rigs are twice as efficient.', type: 'building', building: 'drill', multiplier: 2, requires: { drill: 1 } },
  { id: 'golem-1', name: 'Runic Cores', icon: '🔮', cost: 1300000, description: 'Stone Golems are twice as efficient.', type: 'building', building: 'golem', multiplier: 2, requires: { golem: 1 } },
  { id: 'volcano-1', name: 'Lava Channels', icon: '🔥', cost: 14000000, description: 'Volcanoes are twice as efficient.', type: 'building', building: 'volcano', multiplier: 2, requires: { volcano: 1 } },
  { id: 'meteor-1', name: 'Orbital Nets', icon: '🛰️', cost: 200000000, description: 'Meteor Magnets are twice as efficient.', type: 'building', building: 'meteor', multiplier: 2, requires: { meteor: 1 } },
  { id: 'geology', name: 'Geology Degree', icon: '🎓', cost: 50000, description: 'All production +10%.', type: 'global', multiplier: 1.1, requires: { total: 20000 } },
  { id: 'tectonics', name: 'Plate Tectonics', icon: '🌍', cost: 5000000, description: 'All production +25%.', type: 'global', multiplier: 1.25, requires: { total: 1000000 } },
];

const counter = document.querySelector('#stone-count');
const rateLabel = document.querySelector('#stone-rate');
const clickPowerLabel = document.querySelector('#click-power');
const totalStats = document.querySelector('#total-stats');
const stone = document.querySelector('#stone');
const buildingsList = document.querySelector('#buildings');
const upgradesList = document.querySelector('#upgrades');
const upgradesEmpty = document.querySelector('#upgrades-empty');
const resetButton = document.querySelector('#reset');

function createInitialState() {
  return {
    stones: 0,
    totalStones: 0,
    clicks: 0,
    buildings: Object.fromEntries(BUILDINGS.map((building) => [building.id, 0])),
    upgrades: [],
    lastSaved: Date.now(),
  };
}

let state = loadState();

function loadState() {
  const fresh = createInitialState();
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved) return fresh;
    return {
      ...fresh,
      ...saved,
      buildings: { ...fresh.buildings, ...saved.buildings },
      upgrades: Array.isArray(saved.upgrades) ? saved.upgrades : [],
    };
  } catch {
    return fresh;
  }
}

function saveState() {
  state.lastSaved = Date.now();
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private mode); the game still works without saving.
  }
}

const SUFFIXES = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc'];

function formatNumber(value, decimals = 0) {
  if (value < 1000) {
    return value.toFixed(value % 1 === 0 ? 0 : decimals);
  }
  const tier = Math.min(Math.floor(Math.log10(value) / 3), SUFFIXES.length - 1);
  const scaled = value / 1000 ** tier;
  return `${scaled.toFixed(scaled < 100 ? 2 : 1)}${SUFFIXES[tier]}`;
}

function hasUpgrade(id) {
  return state.upgrades.includes(id);
}

function ownedUpgrades() {
  return UPGRADES.filter((upgrade) => hasUpgrade(upgrade.id));
}

function globalMultiplier() {
  return ownedUpgrades()
    .filter((upgrade) => upgrade.type === 'global')
    .reduce((product, upgrade) => product * upgrade.multiplier, 1);
}

function buildingRate(building) {
  const multiplier = ownedUpgrades()
    .filter((upgrade) => upgrade.type === 'building' && upgrade.building === building.id)
    .reduce((product, upgrade) => product * upgrade.multiplier, 1);
  return building.rate * multiplier * globalMultiplier();
}

function stonesPerSecond() {
  return BUILDINGS.reduce((sum, building) => sum + buildingRate(building) * state.buildings[building.id], 0);
}

function stonesPerClick() {
  const base = ownedUpgrades()
    .filter((upgrade) => upgrade.type === 'click')
    .reduce((product, upgrade) => product * upgrade.multiplier, 1);
  const fromRate = ownedUpgrades()
    .filter((upgrade) => upgrade.type === 'clickRate')
    .reduce((sum, upgrade) => sum + upgrade.percent * stonesPerSecond(), 0);
  return base + fromRate;
}

function buildingCost(building) {
  return Math.ceil(building.baseCost * COST_GROWTH ** state.buildings[building.id]);
}

function isUpgradeUnlocked(upgrade) {
  return Object.entries(upgrade.requires).every(([key, amount]) => {
    if (key === 'clicks') return state.clicks >= amount;
    if (key === 'total') return state.totalStones >= amount;
    return state.buildings[key] >= amount;
  });
}

function gainStones(amount) {
  state.stones += amount;
  state.totalStones += amount;
}

function spawnFloatingText(text, x, y) {
  const label = document.createElement('span');
  label.className = 'floating-text';
  label.textContent = text;
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;
  document.body.append(label);
  label.addEventListener('animationend', () => label.remove());
}

// Buildings: rendered once, then updated in place so buttons keep focus between ticks.
const buildingRows = new Map();

function createBuildingRows() {
  for (const building of BUILDINGS) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'item';
    button.innerHTML = `
      <span class="item__icon" aria-hidden="true">${building.icon}</span>
      <span class="item__body">
        <span class="item__name">${building.name}</span>
        <span class="item__cost"></span>
        <span class="item__info"></span>
      </span>
      <span class="item__owned"></span>
    `;
    button.title = building.description;
    button.addEventListener('click', () => buyBuilding(building));
    buildingsList.append(button);
    buildingRows.set(building.id, button);
  }
}

function buyBuilding(building) {
  const cost = buildingCost(building);
  if (state.stones < cost) return;
  state.stones -= cost;
  state.buildings[building.id] += 1;
  render();
}

function buyUpgrade(upgrade) {
  if (hasUpgrade(upgrade.id) || state.stones < upgrade.cost) return;
  state.stones -= upgrade.cost;
  state.upgrades.push(upgrade.id);
  render();
}

function renderBuildings() {
  BUILDINGS.forEach((building, index) => {
    const row = buildingRows.get(building.id);
    const owned = state.buildings[building.id];
    const previousOwned = index === 0 || state.buildings[BUILDINGS[index - 1].id] > 0;
    // Reveal the next building once the previous one is owned or it is almost affordable.
    const visible = owned > 0 || previousOwned || state.totalStones >= building.baseCost * 0.5;
    row.hidden = !visible;
    if (!visible) return;

    const cost = buildingCost(building);
    row.disabled = state.stones < cost;
    row.querySelector('.item__cost').textContent = `🪨 ${formatNumber(cost)}`;
    row.querySelector('.item__info').textContent = `+${formatNumber(buildingRate(building), 1)}/s each`;
    row.querySelector('.item__owned').textContent = owned;
  });
}

let renderedUpgradeIds = '';

function renderUpgrades() {
  const available = UPGRADES.filter((upgrade) => !hasUpgrade(upgrade.id) && isUpgradeUnlocked(upgrade)).sort(
    (a, b) => a.cost - b.cost,
  );
  const ids = available.map((upgrade) => upgrade.id).join(',');

  if (ids !== renderedUpgradeIds) {
    renderedUpgradeIds = ids;
    upgradesList.replaceChildren(
      ...available.map((upgrade) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'upgrade';
        button.dataset.id = upgrade.id;
        button.textContent = upgrade.icon;
        button.title = `${upgrade.name} — 🪨 ${formatNumber(upgrade.cost)}\n${upgrade.description}`;
        button.setAttribute('aria-label', `${upgrade.name}, costs ${formatNumber(upgrade.cost)} stones. ${upgrade.description}`);
        button.addEventListener('click', () => buyUpgrade(upgrade));
        return button;
      }),
    );
  }

  for (const button of upgradesList.children) {
    const upgrade = UPGRADES.find((item) => item.id === button.dataset.id);
    button.disabled = state.stones < upgrade.cost;
  }
  upgradesEmpty.hidden = available.length > 0;
}

function render() {
  const stonesText = formatNumber(Math.floor(state.stones));
  counter.value = `Stones: ${stonesText}`;
  counter.textContent = `Stones: ${stonesText}`;
  rateLabel.textContent = `per second: ${formatNumber(stonesPerSecond(), 1)}`;
  clickPowerLabel.textContent = `per click: ${formatNumber(stonesPerClick(), 1)}`;
  totalStats.textContent = `Total mined: ${formatNumber(Math.floor(state.totalStones))} · Clicks: ${formatNumber(state.clicks)}`;
  document.title = `${stonesText} stones — Stone Clicker`;
  renderBuildings();
  renderUpgrades();
}

stone.addEventListener('click', (event) => {
  const amount = stonesPerClick();
  state.clicks += 1;
  gainStones(amount);

  // Keyboard activation has no pointer position, so fall back to the stone's center.
  const rect = stone.getBoundingClientRect();
  const x = event.clientX || rect.left + rect.width / 2;
  const y = event.clientY || rect.top + rect.height / 2;
  spawnFloatingText(`+${formatNumber(amount, 1)}`, x, y);
  render();
});

resetButton.addEventListener('click', () => {
  if (!window.confirm('Reset all progress? This cannot be undone.')) return;
  state = createInitialState();
  renderedUpgradeIds = '';
  saveState();
  render();
});

function applyOfflineProgress() {
  const elapsed = Math.min((Date.now() - state.lastSaved) / 1000, MAX_OFFLINE_SECONDS);
  const earned = stonesPerSecond() * elapsed;
  if (earned >= 1) {
    gainStones(earned);
    spawnFloatingText(`Welcome back! +${formatNumber(earned)} stones`, window.innerWidth / 2, 120);
  }
}

// setInterval keeps running (throttled) in background tabs, unlike requestAnimationFrame.
let lastTick = Date.now();

function tick() {
  const now = Date.now();
  gainStones(stonesPerSecond() * ((now - lastTick) / 1000));
  lastTick = now;
  render();
}

createBuildingRows();
applyOfflineProgress();
render();
setInterval(tick, 100);
setInterval(saveState, 5000);
window.addEventListener('beforeunload', saveState);
