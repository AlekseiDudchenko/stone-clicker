# Stone Clicker

A static browser game with English, Russian and German interfaces. Open `index.html` through any static HTTP server; there is no build step or backend.

## Progression

- The next producer group opens at **4 of 8**. Completing any group of 8 multiplies **all automatic production by 1.25**. Full-set bonuses stack.
- The goal panel shows the next unlock, the remaining purchases and their combined cost. Once every group reaches 4, it guides construction, then optional full sets.
- Three independently purchasable research paths have 5 levels each: tools multiply click power by 1.5 per level, automation multiplies production by 1.2, and prospecting multiplies rock rewards by 1.5. Price triples after each level.
- Clicking damages the current rock as well as collecting stones. Cracks appear as its health falls. Breaking it gives a bonus and a replacement rock. One strike breaks at most one rock; excess damage is discarded. Rock health grows by 12% per break for the first 30 breaks, then stays fixed.
- Four construction projects add visible buildings to the landscape: quarry camp, oasis well, city workshop and stone monument. Each multiplies automatic production by 1.1. Projects require the preceding building and 4 producers at their milestone.
- Twelve achievements unlock once and remain saved. They award badges, without additional income bonuses.

Research, full-set and building production bonuses apply equally online and to the existing offline income calculation. Offline income remains capped at 8 hours; existing silverfish mechanics still apply.

## Saves

The existing `stone-clicker-save-v1` localStorage key is retained. Old saves retain stones, producers, click upgrades, language and skins; new progression fields default to zero or empty lists. Reset clears the new progression with the existing game. Progress remains local to the browser.

The Oasis mini-game uses the same Desert unlock rule as the rest of the game. Its purchase, maze and rewards otherwise keep their existing behavior.

## Validation

Run the dependency-free rules tests:

```sh
node --test tests/progression.test.cjs
```

For browser integration tests, install Playwright in your development environment and run:

```sh
node tests/browser.cjs
```

The browser test starts and closes its own static server. Set `PLAYWRIGHT_MODULE` to a module path and `BROWSER_EXECUTABLE` to a Chromium executable when using externally managed dependencies. Optional `SCREENSHOT_DIR` writes desktop and mobile screenshots. The suite exercises real purchases, rock breaking, all research paths and construction, save reloads, old-save migration, online/offline income, reset, translations and responsive layouts.
