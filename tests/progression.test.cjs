const test = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const fs = require('node:fs');
const path = require('node:path');
const context = vm.createContext({});
for (const file of ['prizes.js', 'progression.js']) vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
const evaluate = source => vm.runInContext(source, context);
const fresh = () => evaluate('Object.assign(Object.fromEntries(PRODUCERS.map(p => [p.id, p.initial || 0])), freshProgression())');

test('4 producers unlock the next tier, 8 are optional, legacy ownership stays accessible', () => {
  context.sample = fresh();
  assert.equal(evaluate("producerUnlocked(sample, 'sales')"), false);
  context.sample.people = 4;
  assert.equal(evaluate("producerUnlocked(sample, 'sales')"), true);
  assert.equal(evaluate("producerUnlocked(sample, 'creators')"), false);
  context.sample.creators = 1;
  assert.equal(evaluate("producerUnlocked(sample, 'sales')"), true);
  assert.equal(evaluate("producerUnlocked(sample, 'creators')"), true);
  assert.equal(evaluate("producerUnlocked(sample, 'unknown')"), false);
});
test('goal changes at each milestone and includes exact total purchase cost', () => {
  context.sample = fresh();
  let goal = evaluate('nextGoal(sample)');
  assert.equal(goal.next.id, 'sales'); assert.equal(goal.cost, 44); assert.equal(goal.count, 1);
  context.sample.people = 4;
  assert.equal(evaluate('nextGoal(sample).next.id'), 'creators');
  evaluate('PRODUCERS.forEach(p => sample[p.id] = 4)');
  assert.equal(evaluate('nextGoal(sample).project.id'), 'camp');
  evaluate('sample.buildings = PROJECTS.map(p => p.id)');
  assert.equal(evaluate('nextGoal(sample).producer.id'), 'people');
  assert.equal(evaluate('nextGoal(sample).max'), 8);
  evaluate('PRODUCERS.forEach(p => sample[p.id] = 8)');
  assert.equal(evaluate('nextGoal(sample).done'), true);
});
test('research, full sets and buildings compound consistently', () => {
  context.sample = fresh();
  assert.equal(evaluate('productionMultiplier(sample)'), 1);
  context.sample.people = 8; context.sample.research.automation = 2; context.sample.buildings = ['camp'];
  assert.ok(Math.abs(evaluate('productionMultiplier(sample)') - 1.25 * 1.2 ** 2 * 1.1) < 1e-10);
  assert.equal(evaluate("researchCost(sample, 'tools')"), 75);
  context.sample.research.tools = 2;
  assert.equal(evaluate("researchCost(sample, 'tools')"), 675);
});
test('old saves gain defaults; invalid progression values cannot grant free boosts', () => {
  const old = evaluate('loadProgression({ stones: 1234, people: 8 })');
  assert.equal(old.research.tools, 0); assert.equal(old.buildings.length, 0); assert.equal(old.rocksBroken, 0);
  const bad = evaluate("loadProgression({research:{tools:Infinity,automation:-2,fracture:8.5},buildings:['camp','camp','fake'],achievements:['first-click','fake'],rocksBroken:-4,rockDamage:9999})");
  assert.equal(bad.research.tools, 0); assert.equal(bad.research.automation, 0); assert.equal(bad.research.fracture, 5);
  assert.deepEqual(Array.from(bad.buildings), ['camp']); assert.equal(bad.rocksBroken, 0); assert.equal(bad.rockDamage, 19);
});
test('construction checks both previous project and the biome milestone', () => {
  context.sample = fresh();
  assert.equal(evaluate('projectRequirement(sample, PROJECTS[0]).producer'), 'crewTitle');
  context.sample.people = 4;
  assert.equal(evaluate('projectRequirement(sample, PROJECTS[0])'), null);
  assert.equal(evaluate('projectRequirement(sample, PROJECTS[1]).previous'), 'camp');
  context.sample.buildings.push('camp');
  assert.equal(evaluate('projectRequirement(sample, PROJECTS[1]).producer'), 'creatorsTitle');
  context.sample.creators = 4;
  assert.equal(evaluate('projectRequirement(sample, PROJECTS[1])'), null);
});
test('rock health scales with progress and prospecting raises the reward', () => {
  context.sample = fresh();
  assert.equal(evaluate('rockMaxHp(sample)'), 20); assert.equal(evaluate('rockReward(sample)'), 10);
  context.sample.research.fracture = 1;
  assert.equal(evaluate('rockReward(sample)'), 15);
  context.sample.rocksBroken = 1000000000;
  assert.ok(evaluate('Number.isFinite(rockMaxHp(sample))'));
});
test('achievement conditions match the current game state', () => {
  context.sample = fresh(); context.sample.clicks = 0; context.sample.totalStones = 0;
  assert.equal(evaluate('PRIZES.filter(p => p.check(sample)).length'), 0);
  context.sample.clicks = 1; context.sample.rocksBroken = 1; context.sample.buildings = ['camp'];
  const earned = evaluate('PRIZES.filter(p => p.check(sample)).map(p => p.id)');
  assert.deepEqual(Array.from(earned), ['first-click', 'first-rock', 'first-building']);
});
test('every progression label and achievement is translated in all three languages', () => {
  const keys = evaluate('Object.keys(PROGRESSION_TEXT.en).sort()');
  for (const lang of ['ru', 'de']) {
    assert.deepEqual(Array.from(evaluate(`Object.keys(PROGRESSION_TEXT.${lang}).sort()`)), Array.from(keys));
  }
  assert.equal(evaluate("PRIZES.every(p => ['en','ru','de'].every(lang => p.name[lang] && p.description[lang]))"), true);
});
