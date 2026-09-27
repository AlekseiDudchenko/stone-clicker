// Prizes: to add a new one, append an object to this list.
//
//   id           unique string, stored in the save file (themes refer to it via unlockedBy)
//   name         shown in the Prizes panel and in the "Prize won" popup
//   icon         emoji on the prize badge
//   description  what the player has to do
//   check        function that returns true once the prize is earned. It receives:
//                  stones, totalStones, clicks, perSecond, perClick,
//                  buildings (e.g. buildings.miner), upgrades (count bought)
//   bonus        optional, extra production for owning the prize (0.01 = +1%)
//
// A prize is awarded once and kept forever (until the progress is reset).
const PRIZES = [
  { id: 'first-click', name: 'First Strike', icon: '👆', description: 'Click the stone once.', check: (g) => g.clicks >= 1 },
  { id: 'clicks-100', name: 'Busy Hands', icon: '✋', description: 'Click the stone 100 times.', check: (g) => g.clicks >= 100, bonus: 0.01 },
  { id: 'clicks-1000', name: 'Tireless', icon: '💪', description: 'Click the stone 1,000 times.', check: (g) => g.clicks >= 1000, bonus: 0.02 },
  { id: 'first-building', name: 'Hired Help', icon: '🤝', description: 'Buy your first building.', check: (g) => Object.values(g.buildings).some((count) => count > 0) },
  { id: 'miners-10', name: 'Mining Crew', icon: '👷', description: 'Own 10 Miners.', check: (g) => g.buildings.miner >= 10, bonus: 0.02 },
  { id: 'all-buildings', name: 'Stone Empire', icon: '🏰', description: 'Own at least one of every building.', check: (g) => Object.values(g.buildings).every((count) => count > 0), bonus: 0.05 },
  { id: 'upgrades-5', name: 'Tinkerer', icon: '🔧', description: 'Buy 5 upgrades.', check: (g) => g.upgrades >= 5, bonus: 0.02 },
  { id: 'total-1k', name: 'Rock Pile', icon: '⛰️', description: 'Mine 1,000 stones in total.', check: (g) => g.totalStones >= 1e3 },
  { id: 'total-100k', name: 'Rock Mountain', icon: '🗻', description: 'Mine 100,000 stones in total.', check: (g) => g.totalStones >= 1e5, bonus: 0.02 },
  { id: 'total-1b', name: 'Tectonic Tycoon', icon: '🌐', description: 'Mine 1 billion stones in total.', check: (g) => g.totalStones >= 1e9, bonus: 0.05 },
  { id: 'rate-10', name: 'Steady Flow', icon: '⏱️', description: 'Reach 10 stones per second.', check: (g) => g.perSecond >= 10 },
  { id: 'rate-1000', name: 'Landslide', icon: '🌊', description: 'Reach 1,000 stones per second.', check: (g) => g.perSecond >= 1000, bonus: 0.03 },
];
