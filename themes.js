// Themes: to add a new one, append an object to this list.
//
//   id          unique string, stored in the save file
//   name        shown in the Themes panel
//   icon        emoji on the theme button
//   unlockedBy  optional prize id (see prizes.js); without it the theme is free
//   vars        CSS variables from :root in styles.css to override.
//               Anything left out keeps the Classic value.
const THEMES = [
  {
    id: 'classic',
    name: 'Classic',
    icon: '🪨',
    vars: {},
  },
  {
    id: 'sandstone',
    name: 'Sandstone',
    icon: '🏜️',
    unlockedBy: 'first-building',
    vars: {
      '--bg': '#fbf4e6',
      '--panel-bg': '#f1e4c8',
      '--border': '#dcc79d',
      '--card-bg': '#fffaf0',
      '--accent': '#b5762a',
      '--stone-filter': 'sepia(0.7) saturate(1.4) brightness(1.08)',
    },
  },
  {
    id: 'night',
    name: 'Night Quarry',
    icon: '🌙',
    unlockedBy: 'clicks-1000',
    vars: {
      '--bg': '#15181d',
      '--text': '#e8eaed',
      '--text-strong': '#dadce0',
      '--text-muted': '#9aa0a6',
      '--text-faint': '#6f757b',
      '--panel-bg': '#1d2127',
      '--card-bg': '#262b33',
      '--border': '#39404a',
      '--accent': '#8ab4f8',
      '--danger': '#f28b82',
    },
  },
  {
    id: 'emerald',
    name: 'Emerald',
    icon: '💚',
    unlockedBy: 'total-100k',
    vars: {
      '--bg': '#eef8f1',
      '--panel-bg': '#dcefe2',
      '--border': '#a9d3b6',
      '--card-bg': '#f8fdf9',
      '--accent': '#137a3f',
      '--stone-filter': 'sepia(1) hue-rotate(75deg) saturate(2.6) brightness(0.95)',
    },
  },
  {
    id: 'lava',
    name: 'Lava',
    icon: '🌋',
    unlockedBy: 'rate-1000',
    vars: {
      '--bg': '#1c0f0c',
      '--text': '#fbe9e4',
      '--text-strong': '#ffd2c2',
      '--text-muted': '#d49a88',
      '--text-faint': '#9c6b5e',
      '--panel-bg': '#261410',
      '--card-bg': '#331b15',
      '--border': '#5a2d22',
      '--accent': '#ff7a3d',
      '--danger': '#ff8a80',
      '--stone-filter': 'brightness(0.55) sepia(1) hue-rotate(-25deg) saturate(3.5) contrast(1.2)',
    },
  },
  {
    id: 'gold',
    name: 'Golden Nugget',
    icon: '👑',
    unlockedBy: 'total-1b',
    vars: {
      '--bg': '#fffbea',
      '--panel-bg': '#fdf1c4',
      '--border': '#ecd27a',
      '--card-bg': '#fffef5',
      '--accent': '#b8860b',
      '--stone-filter': 'sepia(1) saturate(3.2) brightness(1.15) hue-rotate(2deg)',
    },
  },
];
