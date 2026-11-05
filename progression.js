// Shared progression rules. All purchases and offline income use these same rules.
const PRODUCERS = [
  { id: 'people', title: 'crewTitle', card: '.crew-card', base: 10, growth: 1.4, initial: 1, icon: '👷' },
  { id: 'sales', title: 'salesTitle', card: '.sales-card', base: 39, growth: 1.4, icon: '⛏️' },
  { id: 'creators', title: 'creatorsTitle', card: '.creators-card', base: 95, growth: 1.4, icon: '💎' },
  { id: 'waterSources', title: 'waterTitle', card: '.water-card', base: 220, growth: 1.4, icon: '💧' },
  { id: 'diggers', title: 'diggersTitle', card: '.diggers-card', base: 520, growth: 1.4, icon: '🪏' },
  { id: 'cacti', title: 'cactusTitle', card: '.cactus-card', base: 1150, growth: 1.4, icon: '🌵' },
  { id: 'tractors', title: 'tractorsTitle', card: '.tractors-card', base: 3500, growth: 1.4, icon: '🚜' },
  { id: 'holes', title: 'holesTitle', card: '.holes-card', base: 6900, growth: 1.4, icon: '🕳️' },
  { id: 'storms', title: 'stormsTitle', card: '.storms-card', base: 12000, growth: 1.4, icon: '🌪️' },
  { id: 'jackhammers', title: 'jackhammersTitle', card: '.jackhammers-card', base: 22000, growth: 1.45, icon: '🔨' },
  { id: 'cementMixers', title: 'cementMixersTitle', card: '.cement-mixers-card', base: 42000, growth: 1.45, icon: '🏗️' },
];
const RESEARCH = [
  { id: 'tools', icon: '⛏️', base: 75, factor: 1.5 },
  { id: 'automation', icon: '⚙️', base: 100, factor: 1.2 },
  { id: 'fracture', icon: '💥', base: 60, factor: 1.5 },
];
const PROJECTS = [
  { id: 'camp', icon: '⛺', cost: 150, gate: 'people' },
  { id: 'well', icon: '💧', cost: 2500, gate: 'creators' },
  { id: 'workshop', icon: '⚒️', cost: 30000, gate: 'storms' },
  { id: 'monument', icon: '🗿', cost: 250000, gate: 'cementMixers' },
];
const PROGRESSION_TEXT = {
  en: {
    goal: 'NEXT GOAL', unlock: 'Unlock: {name}', finish: 'Complete: {name}',
    goalDetail: '{remaining} more · {cost} stones in total', goalHint: '4 unlock the next group · every full set of 8 gives ×1.25 to all production.',
    go: 'Show target', finalGoal: 'Build the Stone Monument', finalDetail: 'Develop the city and leave your mark on the world.', allDone: 'Your stone empire is complete!', allDoneDetail: 'Finish collections, break rocks and try a different upgrade path.',
    choices: 'Choose your investment', choicesEyebrow: 'YOUR STRATEGY', choicesDescription: 'Spend stones on clicking, idle income or rock rewards. You can develop all three.',
    tools: 'Better tools', toolsDesc: 'Click power ×1.5 per level.', automation: 'Automation', automationDesc: 'All automatic production ×1.2 per level.', fracture: 'Prospecting', fractureDesc: 'Rock-breaking rewards ×1.5 per level.',
    level: 'Level {level}/5', max: 'Max level', upgrade: 'Upgrade · {cost}', production: 'Production multiplier: ×{value}',
    rock: 'Rock #{number}', health: '{hp} / {max}', rockReward: 'Break it: +{reward} stones · {count} broken', rockBroken: 'Rock shattered! +{reward} stones',
    settlement: 'Your settlement', construction: 'Build your settlement', constructionDescription: 'Each building appears in the landscape and multiplies all automatic production by 1.1.',
    camp: 'Quarry camp', well: 'Oasis well', workshop: 'City workshop', monument: 'Stone Monument',
    build: 'Build · {cost}', built: 'Built · production ×1.1', requires: 'Requires 4 × {name}', previous: 'Build {name} first',
    achievements: 'Achievements', earned: 'Earned', achievementToast: 'Achievement unlocked: {name}', multiAchievement: '{count} achievements unlocked!',
    setBonus: 'Full set · production ×1.25', setHint: '4 → next group · 8 → production ×1.25',
    citySkin: 'City', cityUpper: 'CITY',
  },
  ru: {
    goal: 'БЛИЖАЙШАЯ ЦЕЛЬ', unlock: 'Открыть: {name}', finish: 'Собрать комплект: {name}',
    goalDetail: 'Ещё {remaining} · всего {cost} камней', goalHint: '4 открывают следующую группу · каждый комплект из 8 даёт ×1,25 ко всей автодобыче.',
    go: 'Показать цель', finalGoal: 'Построить каменный монумент', finalDetail: 'Развивай город и оставь свой след в этом мире.', allDone: 'Твоя каменная империя построена!', allDoneDetail: 'Собирай достижения, раскалывай камни и развивай улучшения.',
    choices: 'Куда вложить камни?', choicesEyebrow: 'ТВОЯ СТРАТЕГИЯ', choicesDescription: 'Выбирай силу клика, автодобычу или награды за камни. Можно развивать все три направления.',
    tools: 'Новые инструменты', toolsDesc: 'Сила клика ×1,5 за уровень.', automation: 'Автоматизация', automationDesc: 'Вся автодобыча ×1,2 за уровень.', fracture: 'Разведка породы', fractureDesc: 'Награда за раскалывание ×1,5 за уровень.',
    level: 'Уровень {level}/5', max: 'Максимум', upgrade: 'Улучшить · {cost}', production: 'Множитель автодобычи: ×{value}',
    rock: 'Камень №{number}', health: '{hp} / {max}', rockReward: 'Расколи: +{reward} камней · расколото {count}', rockBroken: 'Камень расколот! +{reward} камней',
    settlement: 'Твоё поселение', construction: 'Строй своё поселение', constructionDescription: 'Каждая постройка появляется на сцене и умножает всю автодобычу на 1,1.',
    camp: 'Лагерь каменщиков', well: 'Колодец оазиса', workshop: 'Городская мастерская', monument: 'Каменный монумент',
    build: 'Построить · {cost}', built: 'Построено · автодобыча ×1,1', requires: 'Нужно 4 × {name}', previous: 'Сначала построй: {name}',
    achievements: 'Достижения', earned: 'Получено', achievementToast: 'Достижение: {name}', multiAchievement: 'Новых достижений: {count}!',
    setBonus: 'Полный комплект · автодобыча ×1,25', setHint: '4 → следующая группа · 8 → автодобыча ×1,25',
    citySkin: 'Городской', cityUpper: 'ГОРОД',
  },
  de: {
    goal: 'NÄCHSTES ZIEL', unlock: 'Freischalten: {name}', finish: 'Vervollständigen: {name}',
    goalDetail: 'Noch {remaining} · insgesamt {cost} Steine', goalHint: '4 schalten die nächste Gruppe frei · jedes volle Set aus 8 erhöht die gesamte Produktion um Faktor 1,25.',
    go: 'Ziel anzeigen', finalGoal: 'Baue das Steinmonument', finalDetail: 'Entwickle die Stadt und hinterlasse deine Spuren.', allDone: 'Dein Steinimperium ist fertig!', allDoneDetail: 'Sammle Erfolge, zerbrich Felsen und verbessere deine Ausrüstung.',
    choices: 'Worin investierst du?', choicesEyebrow: 'DEINE STRATEGIE', choicesDescription: 'Investiere in Klicks, automatische Produktion oder Felsbelohnungen. Alle drei Wege sind möglich.',
    tools: 'Bessere Werkzeuge', toolsDesc: 'Klickstärke ×1,5 pro Stufe.', automation: 'Automatisierung', automationDesc: 'Automatische Produktion ×1,2 pro Stufe.', fracture: 'Prospektion', fractureDesc: 'Belohnung für Felsen ×1,5 pro Stufe.',
    level: 'Stufe {level}/5', max: 'Maximale Stufe', upgrade: 'Verbessern · {cost}', production: 'Produktionsmultiplikator: ×{value}',
    rock: 'Felsen Nr. {number}', health: '{hp} / {max}', rockReward: 'Zerbrechen: +{reward} Steine · {count} zerbrochen', rockBroken: 'Fels zerbrochen! +{reward} Steine',
    settlement: 'Deine Siedlung', construction: 'Baue deine Siedlung', constructionDescription: 'Jedes Gebäude erscheint in der Landschaft und multipliziert die automatische Produktion mit 1,1.',
    camp: 'Steinbruchlager', well: 'Oasenbrunnen', workshop: 'Stadtwerkstatt', monument: 'Steinmonument',
    build: 'Bauen · {cost}', built: 'Gebaut · Produktion ×1,1', requires: 'Benötigt 4 × {name}', previous: 'Baue zuerst: {name}',
    achievements: 'Erfolge', earned: 'Erreicht', achievementToast: 'Erfolg freigeschaltet: {name}', multiAchievement: '{count} neue Erfolge!',
    setBonus: 'Volles Set · Produktion ×1,25', setHint: '4 → nächste Gruppe · 8 → Produktion ×1,25',
    citySkin: 'Stadt', cityUpper: 'STADT',
  },
};

function pt(key, values = {}) {
  const text = PROGRESSION_TEXT[state.language]?.[key] ?? PROGRESSION_TEXT.en[key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => String(values[name] ?? ''));
}
function freshProgression() {
  return { research: { tools: 0, automation: 0, fracture: 0 }, buildings: [], achievements: [], rocksBroken: 0, rockDamage: 0 };
}
function loadProgression(saved) {
  const result = freshProgression();
  for (const item of RESEARCH) {
    const value = saved.research?.[item.id];
    result.research[item.id] = Number.isFinite(value) ? Math.max(0, Math.min(5, Math.floor(value))) : 0;
  }
  result.buildings = Array.isArray(saved.buildings) ? PROJECTS.filter(p => saved.buildings.includes(p.id)).map(p => p.id) : [];
  result.achievements = Array.isArray(saved.achievements) ? PRIZES.filter(p => saved.achievements.includes(p.id)).map(p => p.id) : [];
  result.rocksBroken = Number.isSafeInteger(saved.rocksBroken) ? Math.max(0, Math.min(1e9, saved.rocksBroken)) : 0;
  result.rockDamage = Number.isFinite(saved.rockDamage) ? Math.max(0, Math.min(rockMaxHp(result) - 1, saved.rockDamage)) : 0;
  return result;
}
function producerUnlocked(s, id) {
  const index = PRODUCERS.findIndex(p => p.id === id);
  if (index < 0) return false;
  // Preserve access for saves made before the new unlock rules.
  return index === 0 || s[PRODUCERS[index - 1].id] >= 4 || PRODUCERS.slice(index).some(p => s[p.id] > 0);
}
function isProducerUnlocked(id) { return producerUnlocked(state, id); }
function productionMultiplier(s) {
  const fullSets = PRODUCERS.filter(p => s[p.id] >= 8).length;
  return 1.25 ** fullSets * 1.2 ** s.research.automation * 1.1 ** s.buildings.length;
}
function gainProductionStones(amount) { gainStones(amount * productionMultiplier(state)); }
function researchCost(s, id) {
  const item = RESEARCH.find(p => p.id === id);
  return Math.ceil(item.base * 3 ** s.research[id]);
}
function rockMaxHp(s) { return Math.ceil(20 * 1.12 ** Math.min(30, s.rocksBroken)); }
function rockReward(s) { return Math.ceil(rockMaxHp(s) * 0.5 * 1.5 ** s.research.fracture); }
function projectRequirement(s, project) {
  const index = PROJECTS.indexOf(project);
  if (index > 0 && !s.buildings.includes(PROJECTS[index - 1].id)) return { previous: PROJECTS[index - 1].id };
  if (s[project.gate] < 4) return { producer: PRODUCERS.find(p => p.id === project.gate).title };
  return null;
}
function nextGoal(s) {
  for (let i = 0; i < PRODUCERS.length; i++) {
    const p = PRODUCERS[i];
    if (s[p.id] < 4) {
      let cost = 0;
      for (let n = s[p.id]; n < 4; n++) cost += Math.ceil(p.base * p.growth ** (n - (p.initial || 0)));
      return { producer: p, next: PRODUCERS[i + 1], count: s[p.id], max: 4, cost };
    }
  }
  const unfinished = PROJECTS.find(p => !s.buildings.includes(p.id));
  if (unfinished) return { project: unfinished, count: s.buildings.length, max: PROJECTS.length };
  const incomplete = PRODUCERS.find(p => s[p.id] < 8);
  if (incomplete) {
    let cost = 0;
    for (let n = s[incomplete.id]; n < 8; n++) cost += Math.ceil(incomplete.base * incomplete.growth ** (n - (incomplete.initial || 0)));
    return { producer: incomplete, count: s[incomplete.id], max: 8, cost };
  }
  return { done: true, count: 1, max: 1 };
}

let progressionUi;
let toastTimer;
let breakTimer;
function showProgressionToast(message) {
  clearTimeout(toastTimer);
  const node = document.getElementById('progression-toast');
  node.textContent = message;
  node.hidden = false;
  toastTimer = setTimeout(() => { node.hidden = true; }, 3500);
}
function resetProgressionView() {
  clearTimeout(toastTimer); clearTimeout(breakTimer);
  document.getElementById('progression-toast').hidden = true;
  stone.classList.remove('stone--shattering');
  document.querySelectorAll('.rock-shard').forEach(n => n.remove());
}
function strikeRock(damage) {
  state.rockDamage += damage;
  if (state.rockDamage < rockMaxHp(state)) return;
  const reward = rockReward(state);
  gainStones(reward);
  state.rocksBroken += 1;
  state.rockDamage = 0;
  showProgressionToast(pt('rockBroken', { reward: formatNumber(reward) }));
  stone.classList.remove('stone--shattering');
  void stone.offsetWidth;
  stone.classList.add('stone--shattering');
  const wrap = document.querySelector('.stone-wrap');
  wrap.querySelectorAll('.rock-shard').forEach(n => n.remove());
  for (let i = 0; i < 8; i++) {
    const shard = document.createElement('span'); shard.className = 'rock-shard';
    shard.style.setProperty('--x', `${Math.cos(i * Math.PI / 4) * 100}px`);
    shard.style.setProperty('--y', `${Math.sin(i * Math.PI / 4) * 85 - 25}px`);
    shard.addEventListener('animationend', () => shard.remove(), { once: true });
    wrap.append(shard);
  }
  clearTimeout(breakTimer);
  breakTimer = setTimeout(() => {
    stone.classList.remove('stone--shattering');
    wrap.querySelectorAll('.rock-shard').forEach(n => n.remove());
  }, 500);
  saveState();
}
function awardAchievements() {
  const earned = PRIZES.filter(p => !state.achievements.includes(p.id) && p.check(state));
  if (!earned.length) return;
  state.achievements.push(...earned.map(p => p.id));
  const name = prizeText(earned[0], 'name');
  showProgressionToast(earned.length === 1 ? pt('achievementToast', { name }) : pt('multiAchievement', { count: earned.length }));
  saveState();
}
function prizeText(prize, field) { return prize[field][state.language] ?? prize[field].en; }
function setText(node, value) { if (node.textContent !== String(value)) node.textContent = value; }
function initProgression() {
  const byId = id => document.getElementById(id);
  progressionUi = {
    research: RESEARCH.map(item => {
      const row = document.createElement('div'); row.className = 'choice-row';
      row.innerHTML = '<span class="choice-icon" aria-hidden="true"></span><div><strong></strong><p></p><small></small></div><button type="button"></button>';
      row.firstElementChild.textContent = item.icon;
      const button = row.querySelector('button'); button.dataset.research = item.id;
      button.addEventListener('click', () => {
        const cost = researchCost(state, item.id);
        if (state.research[item.id] >= 5 || state.stones < cost) return;
        state.stones -= cost; state.research[item.id] += 1; saveState(); render();
      });
      byId('upgrade-choices').append(row);
      return { item, row, button };
    }),
    projects: PROJECTS.map(item => {
      const row = document.createElement('div'); row.className = 'project-row';
      row.innerHTML = '<span class="choice-icon" aria-hidden="true"></span><div><strong></strong><p></p></div><button type="button"></button>';
      row.firstElementChild.textContent = item.icon;
      const button = row.querySelector('button'); button.dataset.project = item.id;
      button.addEventListener('click', () => {
        if (state.buildings.includes(item.id) || projectRequirement(state, item) || state.stones < item.cost) return;
        state.stones -= item.cost; state.buildings.push(item.id); saveState(); render();
      });
      byId('construction-list').append(row);
      return { item, row, button };
    }),
    prizes: PRIZES.map(item => {
      const row = document.createElement('div'); row.className = 'achievement'; row.dataset.achievement = item.id;
      row.innerHTML = '<span aria-hidden="true"></span><div><strong></strong><p></p><small></small></div>';
      row.firstElementChild.textContent = item.icon;
      byId('achievements-list').append(row); return { item, row };
    }),
    badges: PRODUCERS.map(item => {
      const card = document.querySelector(item.card); const badge = document.createElement('p'); badge.className = 'set-badge';
      card.append(badge); return { item, badge };
    }),
  };
  byId('goal-action').addEventListener('click', () => {
    const goal = nextGoal(state);
    const selector = goal.producer?.card ?? (goal.project ? '.construction-list' : '#achievements-details');
    const target = document.querySelector(selector);
    if (target instanceof HTMLDetailsElement) target.open = true;
    target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
    const button = goal.project ? target.querySelector(`[data-project="${goal.project.id}"]`) : target.querySelector('button');
    (button && !button.disabled ? button : target).focus({ preventScroll: true });
  });
  const scene = byId('settlement-scene');
  // Vector scenery stays sharp at phone and desktop sizes; construction changes the landscape.
  scene.innerHTML = `<svg viewBox="0 0 500 105" aria-hidden="true">
    <path class="land-back" d="M0 80Q70 15 140 70T285 65T420 58T500 72V105H0Z"/>
    <path class="land-front" d="M0 87Q120 70 230 87T500 80V105H0Z"/>
    <path class="scene-road" d="M0 102Q130 78 250 96T500 91"/>
    <g data-building="camp" class="scene-building"><path fill="#c89b69" d="M35 87l30-50 30 50Z"/><path fill="#f1cd8d" d="M65 37l45 50H95Z"/><path fill="#694b37" d="M57 87l9-29 15 29Z"/><path stroke="#71563f" stroke-width="3" d="M65 30v9"/></g>
    <g data-building="well" class="scene-building"><ellipse cx="190" cy="83" rx="22" ry="9" fill="#617e80"/><path fill="#b8ab90" d="M168 68v16q22 15 44 0V68Z"/><ellipse cx="190" cy="68" rx="22" ry="8" fill="#568f9e"/><path stroke="#87613e" stroke-width="5" d="M167 69V34h46v35"/><path fill="#aa7251" d="M158 35l31-19 33 19Z"/><path stroke="#e5d7b8" stroke-width="2" d="M190 35v25"/></g>
    <g data-building="workshop" class="scene-building"><path fill="#a46f54" d="M280 85V46h68v39Z"/><path fill="#715449" d="M274 47l41-25 39 25Z"/><path fill="#ddd0ab" d="M289 58h15v13h-15Zm39 0h12v13h-12Z"/><path fill="#58473e" d="M309 85V61h16v24Z"/><path fill="#807265" d="M335 32V11h10v28Z"/><circle class="chimney-smoke" cx="340" cy="5" r="5" fill="#b8b5ac"/></g>
    <g data-building="monument" class="scene-building"><path fill="#a1a9a2" d="M420 82l8-10h38l8 10v6h-54Z"/><path fill="#bec5b8" d="M430 69V24l15-15 16 15v45Z"/><path fill="#89968c" d="M445 9l16 15v45h-16Z"/><path fill="#e8cd78" d="M435 38l9-8 10 8-10 9Z"/></g>
    <g id="scene-workers" fill="#6c7863"></g>
  </svg>`;
}
function renderProgression() {
  if (!progressionUi) return;
  awardAchievements();
  const el = id => document.getElementById(id);
  for (const [id, key] of Object.entries({ 'goal-label': 'goal', 'choices-title': 'choices', 'choices-eyebrow': 'choicesEyebrow', 'choices-description': 'choicesDescription', 'construction-title': 'construction', 'construction-description': 'constructionDescription', 'achievements-title': 'achievements', 'settlement-title': 'settlement', 'goal-action': 'go' })) setText(el(id), pt(key));
  const goal = nextGoal(state);
  let title, detail;
  if (goal.producer) {
    title = pt(goal.next ? 'unlock' : 'finish', { name: t((goal.next ?? goal.producer).title) });
    detail = pt('goalDetail', { remaining: goal.max - goal.count, cost: formatNumber(goal.cost) });
  } else if (goal.project) {
    title = pt(goal.project.id); detail = `${pt('build', { cost: formatNumber(goal.project.cost) })} · ${pt('finalDetail')}`;
  } else { title = pt('allDone'); detail = pt('allDoneDetail'); }
  setText(el('goal-title'), title); setText(el('goal-detail'), detail);
  el('goal-detail').title = pt('goalHint');
  setText(el('goal-count'), `${goal.count}/${goal.max}`);
  el('goal-progress').max = goal.max; el('goal-progress').value = goal.count;
  for (const { item, row, button } of progressionUi.research) {
    const level = state.research[item.id]; const cost = researchCost(state, item.id);
    setText(row.querySelector('strong'), pt(item.id)); setText(row.querySelector('p'), pt(`${item.id}Desc`));
    setText(row.querySelector('small'), pt('level', { level }));
    setText(button, level === 5 ? pt('max') : pt('upgrade', { cost: formatNumber(cost) }));
    button.setAttribute('aria-label', `${pt(item.id)} — ${button.textContent}`);
    button.disabled = level === 5 || state.stones < cost;
  }
  setText(el('production-summary'), pt('production', { value: productionMultiplier(state).toFixed(2) }));
  for (const { item, row, button } of progressionUi.projects) {
    const built = state.buildings.includes(item.id); const requirement = projectRequirement(state, item);
    setText(row.querySelector('strong'), pt(item.id));
    const description = built ? pt('built') : requirement?.previous ? pt('previous', { name: pt(requirement.previous) }) : requirement?.producer ? pt('requires', { name: t(requirement.producer) }) : pt('built').split(' · ')[1];
    setText(row.querySelector('p'), description);
    setText(button, built ? '✓' : pt('build', { cost: formatNumber(item.cost) }));
    button.setAttribute('aria-label', `${pt(item.id)} — ${built ? pt('built') : button.textContent}`);
    button.disabled = built || !!requirement || state.stones < item.cost;
    row.classList.toggle('project-row--built', built);
    el('settlement-scene').querySelector(`[data-building="${item.id}"]`).classList.toggle('scene-building--built', built);
  }
  setText(el('settlement-count'), `${state.buildings.length} / ${PROJECTS.length}`);
  el('settlement-scene').setAttribute('aria-label', `${pt('settlement')}: ${state.buildings.map(id => pt(id)).join(', ') || '0'}`);
  const workers = el('scene-workers');
  const workerCount = Math.min(8, state.people + state.sales);
  if (workers.childElementCount !== workerCount) workers.innerHTML = Array.from({ length: workerCount }, (_, i) => `<circle cx="${120 + i * 24}" cy="93" r="3"/>`).join('');
  setText(el('achievements-count'), `${state.achievements.length} / ${PRIZES.length}`);
  for (const { item, row } of progressionUi.prizes) {
    const earned = state.achievements.includes(item.id);
    row.classList.toggle('achievement--earned', earned);
    setText(row.querySelector('strong'), prizeText(item, 'name'));
    setText(row.querySelector('p'), prizeText(item, 'description'));
    setText(row.querySelector('small'), earned ? `✓ ${pt('earned')}` : '');
  }
  for (const { item, badge } of progressionUi.badges) {
    const full = state[item.id] >= 8;
    setText(badge, pt(full ? 'setBonus' : 'setHint'));
    badge.classList.toggle('set-badge--full', full);
  }
  const max = rockMaxHp(state); const hp = Math.ceil(max - state.rockDamage);
  setText(el('rock-label'), pt('rock', { number: state.rocksBroken + 1 }));
  setText(el('rock-health'), pt('health', { hp, max }));
  el('rock-progress').max = max; el('rock-progress').value = hp;
  setText(el('rock-reward'), pt('rockReward', { reward: formatNumber(rockReward(state)), count: state.rocksBroken }));
  stone.dataset.crackStage = Math.min(3, Math.floor(state.rockDamage / max * 4));
  stone.setAttribute('aria-label', `${t('stoneAria')} · ${pt('health', { hp, max })}`);
}
