const SAVE_KEY = 'stone-clicker-save-v1';
const BASE_CLICK_X2_COST = 100;
const CLICK_X2_COST_GROWTH = 3.5;
const MAX_PEOPLE = 8;
const CREW_DROP_INTERVAL = 1000;
const BASE_PERSON_COST = 10;
const PERSON_COST_GROWTH = 1.4;
const MAX_SALES = 8;
const SALES_INTERVAL = 1000;
const SALES_STONES_PER_SWING = 1.5;
const BASE_SALES_COST = 39;
const SALES_COST_GROWTH = 1.4;
const MAX_CREATORS = 8;
const CREATOR_INTERVAL = 1000;
const CREATOR_STONES_PER_SEARCH = 2.5;
const BASE_CREATOR_COST = 95;
const CREATOR_COST_GROWTH = 1.4;
const MAX_WATER_SOURCES = 8;
const WATER_INTERVAL = 1000;
const WATER_STONES_PER_FLOW = 4;
const BASE_WATER_COST = 220;
const WATER_COST_GROWTH = 1.4;
const MAX_DIGGERS = 8;
const DIGGER_INTERVAL = 1000;
const DIGGER_STONES_PER_SCOOP = 7;
const BASE_DIGGER_COST = 520;
const DIGGER_COST_GROWTH = 1.4;
const MAX_CACTI = 8;
const CACTUS_INTERVAL = 1000;
const CACTUS_STONES_PER_GROWTH = 12;
const BASE_CACTUS_COST = 1150;
const CACTUS_COST_GROWTH = 1.4;
const MAX_TRACTORS = 8;
const TRACTOR_INTERVAL = 1000;
const TRACTOR_STONES_PER_SCOOP = 25;
const BASE_TRACTOR_COST = 3500;
const TRACTOR_COST_GROWTH = 1.4;
const MAX_HOLES = 8;
const HOLE_INTERVAL = 1000;
const HOLE_STONES_PER_DROP = 48;
const BASE_HOLE_COST = 6900;
const HOLE_COST_GROWTH = 1.4;
const MAX_STORMS = 8;
const STORM_INTERVAL = 1000;
const STORM_STONES_PER_SWIRL = 75;
const BASE_STORM_COST = 12000;
const STORM_COST_GROWTH = 1.4;
const MAX_JACKHAMMERS = 8;
const JACKHAMMER_INTERVAL = 1000;
const JACKHAMMER_STONES_PER_HIT = 120;
const BASE_JACKHAMMER_COST = 22000;
const JACKHAMMER_COST_GROWTH = 1.45;
const MAX_CEMENT_MIXERS = 8;
const CEMENT_MIXER_INTERVAL = 1000;
const CEMENT_MIXER_STONES_PER_SPIN = 240;
const BASE_CEMENT_MIXER_COST = 42000;
const CEMENT_MIXER_COST_GROWTH = 1.45;
const MAX_OFFLINE_SECONDS = 8 * 60 * 60;
const SILVERFISH_UNLOCK_TOTAL = 5000;
const SILVERFISH_EVENT_VERSION = 3;
const SILVERFISH_MIN_INTERVAL = 60 * 1000;
const SILVERFISH_MAX_INTERVAL = 2 * 60 * 1000;
const SILVERFISH_MIN_COUNT = 2;
const SILVERFISH_MAX_COUNT = 3;
const SILVERFISH_MIN_STEAL_FRACTION = 0.05;
const SILVERFISH_MAX_STEAL_FRACTION = 0.10;
const SILVERFISH_DEFAULT_MAX_CPS = 5;
const SILVERFISH_HP_SECONDS_AT_MAX_CPS = 1.5;

const TRANSLATIONS = {
  en: {
    appTitle: 'Stone Clicker', language: 'Language', mainAria: 'Stone Clicker game', futureAria: 'Upgrades',
    stoneAria: 'Collect a stone', stoneSkins: 'Stone skins', classicSkin: 'Classic', desertSkin: 'Desert', citySkin: 'City', cityUpper: 'CITY',
    lockedShort: '🔒', skinOptionAria: 'Use the {skin} stone skin', skinLockedAria: 'The {skin} stone skin is locked',
    stonesLabel: 'Stones', perSecond: 'per second', perClick: 'per click', clickX2: 'Clicks ×2', clickX2Aria: 'Double click power for {cost} stones',
    totalMined: 'Total mined', clicks: 'Clicks', unlockedBiome: 'Unlocked biome', newBiome: 'New biome',
    desert: 'Desert', desertUpper: 'DESERT', desertWorldTitle: 'Desert', desertWorldDescription: 'Unlocks after all 8 Diamond Creators.', crewTitle: 'Stone Crew',
    crewDescription: 'Every second, the crew throws stones at the poor guy. You keep them.', poorGuy: 'Poor guy',
    people: 'people', hire: 'Hire', crewFull: 'Crew full', stonesUnit: 'stones', salesTitle: 'Sales',
    salesDescription: 'Each recruit mines 1.5 stones per second with a pickaxe.', salesPeople: 'Sales',
    recruit: 'Recruit', teamFull: 'Team full', locked: 'Locked', creatorsTitle: 'Diamond Creators',
    creatorsDescription: 'Famous creators dig for diamonds. 2.5 stones per second each.', creators: 'creators',
    invite: 'Invite', waterTitle: 'Water Sources', waterDescription: 'Each flowing source brings 4 stones per second.',
    sources: 'sources', build: 'Build', allFlowing: 'All flowing', diggersTitle: 'Shovel Diggers',
    diggersDescription: 'Each digger shovels up 7 stones per second.', diggers: 'diggers',
    cactusTitle: 'Stone Cacti', cactusDescription: 'Each cactus grows 12 stones per second.', cacti: 'cacti', plant: 'Plant',
    tractorsTitle: 'Sand Tractors', tractorsDescription: 'Each tractor scoops up 25 stones per second with its front bucket.',
    tractors: 'tractors', buy: 'Buy', holesTitle: 'Stone Holes',
    holesDescription: 'Stones tumble into each hole, bringing 48 stones per second.', holes: 'holes', open: 'Open',
    stormsTitle: 'Sandstorms', stormsDescription: 'Each desert whirlwind carries 75 stones per second.',
    storms: 'storms', summon: 'Summon',
    cityTitle: 'City', cityDescription: 'The city opens after all 8 Sandstorms.',
    jackhammersTitle: 'Jackhammers', jackhammersDescription: 'A handheld jackhammer rapidly breaks asphalt and produces 120 stones per second.',
    jackhammers: 'jackhammers', jackhammersRosterAria: '{count} of 8 Jackhammers bought',
    jackhammersLockedAria: 'Summon all 8 Sandstorms to unlock Jackhammers',
    jackhammersFullAria: 'Maximum number of Jackhammers reached',
    jackhammersBuyAria: 'Buy a Jackhammer for {cost} stones',
    cementMixersTitle: 'Cement Mixers', cementMixersDescription: 'Each cement mixer spins continuously and produces 240 stones per second.',
    cementMixers: 'mixers', cementMixersRosterAria: '{count} of 8 Cement Mixers bought',
    cementMixersLockedAria: 'Buy all 8 Jackhammers to unlock Cement Mixers',
    cementMixersFullAria: 'Maximum number of Cement Mixers reached',
    cementMixersBuyAria: 'Buy a Cement Mixer for {cost} stones',
    resetProgress: 'Reset progress', resetConfirm: 'Reset absolutely all progress? Stones, upgrades, biome unlocks and stone skins will be lost.',
    stonesAria: 'Stones: {count}', crewRosterAria: '{count} of 8 people hired', targetAria: 'Stone collector',
    hirePersonAria: 'Hire another person for {cost} stones', crewFullAria: 'Maximum crew size reached',
    salesRosterAria: '{count} of 8 Sales recruited', salesLockedAria: 'Hire all 8 Stone Crew people to unlock Sales',
    salesFullAria: 'Maximum Sales team size reached', salesBuyAria: 'Recruit Sales for {cost} stones',
    creatorsRosterAria: '{count} of 8 Diamond Creators invited',
    creatorsLockedAria: 'Recruit all 8 Sales to unlock Diamond Creators',
    creatorsFullAria: 'Maximum creator team size reached', creatorsBuyAria: 'Invite a Diamond Creator for {cost} stones',
    waterRosterAria: '{count} of 8 Water Sources built',
    waterLockedAria: 'Invite all 8 Diamond Creators to unlock Water Sources',
    waterFullAria: 'Maximum number of Water Sources reached', waterBuyAria: 'Build a Water Source for {cost} stones',
    diggersRosterAria: '{count} of 8 Shovel Diggers hired',
    diggersLockedAria: 'Build all 8 Water Sources to unlock Shovel Diggers',
    diggersFullAria: 'Maximum number of Shovel Diggers reached', diggersBuyAria: 'Hire a Shovel Digger for {cost} stones',
    cactusRosterAria: '{count} of 8 Stone Cacti planted', cactusLockedAria: 'Hire all 8 Shovel Diggers to unlock Stone Cacti',
    cactusFullAria: 'Maximum number of Stone Cacti reached', cactusBuyAria: 'Plant a Stone Cactus for {cost} stones',
    tractorsRosterAria: '{count} of 8 Sand Tractors bought', tractorsLockedAria: 'Plant all 8 Stone Cacti to unlock Sand Tractors',
    tractorsFullAria: 'Maximum number of Sand Tractors reached', tractorsBuyAria: 'Buy a Sand Tractor for {cost} stones',
    holesRosterAria: '{count} of 8 Stone Holes opened', holesLockedAria: 'Buy all 8 Sand Tractors to unlock Stone Holes',
    holesFullAria: 'Maximum number of Stone Holes reached', holesBuyAria: 'Open a Stone Hole for {cost} stones',
    stormsRosterAria: '{count} of 8 Sandstorms summoned', stormsLockedAria: 'Open all 8 Stone Holes to unlock Sandstorms',
    stormsFullAria: 'Maximum number of Sandstorms reached', stormsBuyAria: 'Summon a Sandstorm for {cost} stones',
  },
  ru: {
    appTitle: 'Кликер камней', language: 'Язык', mainAria: 'Игра «Кликер камней»', futureAria: 'Улучшения',
    stoneAria: 'Добыть камень', stoneSkins: 'Скины камня', classicSkin: 'Обычный', desertSkin: 'Пустынный',
    lockedShort: '🔒', skinOptionAria: 'Выбрать скин камня «{skin}»', skinLockedAria: 'Скин камня «{skin}» пока закрыт',
    stonesLabel: 'Камни', perSecond: 'в секунду', perClick: 'за клик', clickX2: 'Клики ×2', clickX2Aria: 'Удвоить силу клика за {cost} камней',
    totalMined: 'Всего добыто', clicks: 'Клики', unlockedBiome: 'Открытый биом', newBiome: 'Новый биом',
    desert: 'Пустыня', desertUpper: 'ПУСТЫНЯ', desertWorldTitle: 'Пустыня', desertWorldDescription: 'Открывается после всех 8 Diamond Creators.', crewTitle: 'Каменная команда',
    crewDescription: 'Каждую секунду команда бросает камни в беднягу. Камни достаются тебе.', poorGuy: 'Бедняга',
    people: 'людей', hire: 'Нанять', crewFull: 'Команда полна', stonesUnit: 'камней', salesTitle: 'Продажи',
    salesDescription: 'Каждый работник добывает киркой 1,5 камня в секунду.', salesPeople: 'работников',
    recruit: 'Нанять', teamFull: 'Команда полна', locked: 'Закрыто', creatorsTitle: 'Алмазные ютуберы',
    creatorsDescription: 'Известные ютуберы ищут алмазы. Каждый приносит 2,5 камня в секунду.', creators: 'ютуберов',
    invite: 'Пригласить', waterTitle: 'Источники воды', waterDescription: 'Каждый текущий источник приносит 4 камня в секунду.',
    sources: 'источников', build: 'Построить', allFlowing: 'Все текут', diggersTitle: 'Копатели с лопатами',
    diggersDescription: 'Каждый копатель добывает лопатой 7 камней в секунду.', diggers: 'копателей',
    cactusTitle: 'Каменные кактусы', cactusDescription: 'Каждый кактус выращивает 12 камней в секунду.', cacti: 'кактусов', plant: 'Посадить',
    tractorsTitle: 'Песчаные тракторы', tractorsDescription: 'Каждый трактор захватывает передним ковшом 25 камней в секунду.',
    tractors: 'тракторов', buy: 'Купить', holesTitle: 'Каменные ямы',
    holesDescription: 'В каждую яму сыпятся камни. Она приносит 48 камней в секунду.', holes: 'ям', open: 'Открыть',
    stormsTitle: 'Песчаные бури', stormsDescription: 'Каждый пустынный вихрь приносит 75 камней в секунду.',
    storms: 'бурь', summon: 'Призвать',
    cityTitle: 'Город', cityDescription: 'Город открывается после всех 8 песчаных бурь.',
    jackhammersTitle: 'Отбойные молотки', jackhammersDescription: 'Ручной отбойный молоток очень часто бьёт по асфальту и приносит 120 камней в секунду.',
    jackhammers: 'молотков', jackhammersRosterAria: 'Куплено отбойных молотков: {count} из 8',
    jackhammersLockedAria: 'Призови все 8 песчаных бурь, чтобы открыть отбойные молотки',
    jackhammersFullAria: 'Достигнут максимум отбойных молотков',
    jackhammersBuyAria: 'Купить отбойный молоток за {cost} камней',
    cementMixersTitle: 'Бетономешалки', cementMixersDescription: 'Каждая бетономешалка постоянно вращает барабан и приносит 240 камней в секунду.',
    cementMixers: 'бетономешалок', cementMixersRosterAria: 'Куплено бетономешалок: {count} из 8',
    cementMixersLockedAria: 'Купи все 8 отбойных молотков, чтобы открыть бетономешалки',
    cementMixersFullAria: 'Достигнут максимум бетономешалок',
    cementMixersBuyAria: 'Купить бетономешалку за {cost} камней',
    resetProgress: 'Сбросить прогресс', resetConfirm: 'Сбросить абсолютно весь прогресс? Камни, улучшения, открытые биомы и скины будут потеряны.',
    stonesAria: 'Камни: {count}', crewRosterAria: 'Нанято людей: {count} из 8', targetAria: 'Сборщик камней',
    hirePersonAria: 'Нанять ещё одного человека за {cost} камней', crewFullAria: 'Достигнут максимум команды',
    salesRosterAria: 'Нанято работников: {count} из 8', salesLockedAria: 'Найми всю команду из 8 человек, чтобы открыть Продажи',
    salesFullAria: 'Достигнут максимум работников', salesBuyAria: 'Нанять работника за {cost} камней',
    creatorsRosterAria: 'Приглашено ютуберов: {count} из 8',
    creatorsLockedAria: 'Найми всех 8 работников, чтобы открыть Алмазных ютуберов',
    creatorsFullAria: 'Достигнут максимум ютуберов', creatorsBuyAria: 'Пригласить ютубера за {cost} камней',
    waterRosterAria: 'Построено источников: {count} из 8',
    waterLockedAria: 'Пригласи всех 8 ютуберов, чтобы открыть Источники воды',
    waterFullAria: 'Достигнут максимум источников воды', waterBuyAria: 'Построить источник за {cost} камней',
    diggersRosterAria: 'Нанято копателей: {count} из 8',
    diggersLockedAria: 'Построй все 8 источников воды, чтобы открыть копателей с лопатами',
    diggersFullAria: 'Достигнут максимум копателей', diggersBuyAria: 'Нанять копателя за {cost} камней',
    cactusRosterAria: 'Посажено кактусов: {count} из 8', cactusLockedAria: 'Найми всех 8 копателей, чтобы открыть каменные кактусы',
    cactusFullAria: 'Достигнут максимум кактусов', cactusBuyAria: 'Посадить каменный кактус за {cost} камней',
    tractorsRosterAria: 'Куплено тракторов: {count} из 8', tractorsLockedAria: 'Посади все 8 кактусов, чтобы открыть песчаные тракторы',
    tractorsFullAria: 'Достигнут максимум тракторов', tractorsBuyAria: 'Купить песчаный трактор за {cost} камней',
    holesRosterAria: 'Открыто каменных ям: {count} из 8', holesLockedAria: 'Купи все 8 песчаных тракторов, чтобы открыть каменные ямы',
    holesFullAria: 'Достигнут максимум каменных ям', holesBuyAria: 'Открыть каменную яму за {cost} камней',
    stormsRosterAria: 'Призвано песчаных бурь: {count} из 8', stormsLockedAria: 'Открой все 8 каменных ям, чтобы открыть песчаные бури',
    stormsFullAria: 'Достигнут максимум песчаных бурь', stormsBuyAria: 'Призвать песчаную бурю за {cost} камней',
  },
  de: {
    appTitle: 'Stein-Klicker', language: 'Sprache', mainAria: 'Stein-Klicker-Spiel', futureAria: 'Verbesserungen',
    stoneAria: 'Einen Stein sammeln', stoneSkins: 'Stein-Skins', classicSkin: 'Klassisch', desertSkin: 'Wüste',
    lockedShort: '🔒', skinOptionAria: 'Stein-Skin „{skin}“ verwenden', skinLockedAria: 'Stein-Skin „{skin}“ ist gesperrt',
    stonesLabel: 'Steine', perSecond: 'pro Sekunde', perClick: 'pro Klick', clickX2: 'Klicks ×2', clickX2Aria: 'Klickstärke für {cost} Steine verdoppeln',
    totalMined: 'Insgesamt abgebaut', clicks: 'Klicks', unlockedBiome: 'Freigeschaltetes Biom', newBiome: 'Neues Biom',
    desert: 'Wüste', desertUpper: 'WÜSTE', desertWorldTitle: 'Wüste', desertWorldDescription: 'Wird nach allen 8 Diamond Creators freigeschaltet.', crewTitle: 'Steintrupp',
    crewDescription: 'Jede Sekunde wirft der Trupp Steine auf den armen Kerl. Du behältst sie.', poorGuy: 'Armer Kerl',
    people: 'Personen', hire: 'Anheuern', crewFull: 'Trupp voll', stonesUnit: 'Steine', salesTitle: 'Verkauf',
    salesDescription: 'Jeder Arbeiter baut mit einer Spitzhacke 1,5 Steine pro Sekunde ab.', salesPeople: 'Arbeiter',
    recruit: 'Anwerben', teamFull: 'Team voll', locked: 'Gesperrt', creatorsTitle: 'Diamant-Creator',
    creatorsDescription: 'Bekannte Creator suchen Diamanten. Jeder bringt 2,5 Steine pro Sekunde.', creators: 'Creator',
    invite: 'Einladen', waterTitle: 'Wasserquellen', waterDescription: 'Jede fließende Quelle bringt 4 Steine pro Sekunde.',
    sources: 'Quellen', build: 'Bauen', allFlowing: 'Alle fließen', diggersTitle: 'Schaufelgräber',
    diggersDescription: 'Jeder Gräber schaufelt 7 Steine pro Sekunde aus.', diggers: 'Gräber',
    cactusTitle: 'Steinkakteen', cactusDescription: 'Jeder Kaktus erzeugt 12 Steine pro Sekunde.', cacti: 'Kakteen', plant: 'Pflanzen',
    tractorsTitle: 'Sandtraktoren', tractorsDescription: 'Jeder Traktor schaufelt mit seiner Frontschaufel 25 Steine pro Sekunde.',
    tractors: 'Traktoren', buy: 'Kaufen', holesTitle: 'Steinlöcher',
    holesDescription: 'In jedes Loch fallen Steine. Es bringt 48 Steine pro Sekunde.', holes: 'Löcher', open: 'Öffnen',
    stormsTitle: 'Sandstürme', stormsDescription: 'Jeder Wüstenwirbel bringt 75 Steine pro Sekunde.',
    storms: 'Stürme', summon: 'Beschwören',
    cityTitle: 'Stadt', cityDescription: 'Die Stadt wird nach allen 8 Sandstürmen freigeschaltet.',
    jackhammersTitle: 'Presslufthämmer', jackhammersDescription: 'Ein handgeführter Presslufthammer schlägt schnell auf Asphalt und bringt 120 Steine pro Sekunde.',
    jackhammers: 'Presslufthämmer', jackhammersRosterAria: '{count} von 8 Presslufthämmern gekauft',
    jackhammersLockedAria: 'Beschwöre alle 8 Sandstürme, um Presslufthämmer freizuschalten',
    jackhammersFullAria: 'Maximale Anzahl an Presslufthämmern erreicht',
    jackhammersBuyAria: 'Presslufthammer für {cost} Steine kaufen',
    cementMixersTitle: 'Betonmischer', cementMixersDescription: 'Jeder Betonmischer dreht sich ständig und bringt 240 Steine pro Sekunde.',
    cementMixers: 'Betonmischer', cementMixersRosterAria: '{count} von 8 Betonmischern gekauft',
    cementMixersLockedAria: 'Kaufe alle 8 Presslufthämmer, um Betonmischer freizuschalten',
    cementMixersFullAria: 'Maximale Anzahl an Betonmischern erreicht',
    cementMixersBuyAria: 'Betonmischer für {cost} Steine kaufen',
    resetProgress: 'Fortschritt zurücksetzen', resetConfirm: 'Wirklich den gesamten Fortschritt zurücksetzen? Steine, Upgrades, freigeschaltete Biome und Stein-Skins gehen verloren.',
    stonesAria: 'Steine: {count}', crewRosterAria: '{count} von 8 Personen angeheuert', targetAria: 'Steinsammler',
    hirePersonAria: 'Eine weitere Person für {cost} Steine anheuern', crewFullAria: 'Maximale Truppgröße erreicht',
    salesRosterAria: '{count} von 8 Arbeitern angeworben', salesLockedAria: 'Heuere alle 8 Personen an, um Verkauf freizuschalten',
    salesFullAria: 'Maximale Arbeiterzahl erreicht', salesBuyAria: 'Arbeiter für {cost} Steine anwerben',
    creatorsRosterAria: '{count} von 8 Diamant-Creatorn eingeladen',
    creatorsLockedAria: 'Wirb alle 8 Arbeiter an, um Diamant-Creator freizuschalten',
    creatorsFullAria: 'Maximale Creatorzahl erreicht', creatorsBuyAria: 'Diamant-Creator für {cost} Steine einladen',
    waterRosterAria: '{count} von 8 Wasserquellen gebaut',
    waterLockedAria: 'Lade alle 8 Diamant-Creator ein, um Wasserquellen freizuschalten',
    waterFullAria: 'Maximale Anzahl an Wasserquellen erreicht', waterBuyAria: 'Wasserquelle für {cost} Steine bauen',
    diggersRosterAria: '{count} von 8 Schaufelgräbern angeheuert',
    diggersLockedAria: 'Baue alle 8 Wasserquellen, um Schaufelgräber freizuschalten',
    diggersFullAria: 'Maximale Anzahl an Schaufelgräbern erreicht', diggersBuyAria: 'Schaufelgräber für {cost} Steine anheuern',
    cactusRosterAria: '{count} von 8 Steinkakteen gepflanzt', cactusLockedAria: 'Heuere alle 8 Schaufelgräber an, um Steinkakteen freizuschalten',
    cactusFullAria: 'Maximale Anzahl an Steinkakteen erreicht', cactusBuyAria: 'Steinkaktus für {cost} Steine pflanzen',
    tractorsRosterAria: '{count} von 8 Sandtraktoren gekauft', tractorsLockedAria: 'Pflanze alle 8 Steinkakteen, um Sandtraktoren freizuschalten',
    tractorsFullAria: 'Maximale Anzahl an Sandtraktoren erreicht', tractorsBuyAria: 'Sandtraktor für {cost} Steine kaufen',
    holesRosterAria: '{count} von 8 Steinlöchern geöffnet', holesLockedAria: 'Kaufe alle 8 Sandtraktoren, um Steinlöcher freizuschalten',
    holesFullAria: 'Maximale Anzahl an Steinlöchern erreicht', holesBuyAria: 'Steinloch für {cost} Steine öffnen',
    stormsRosterAria: '{count} von 8 Sandstürmen beschworen', stormsLockedAria: 'Öffne alle 8 Steinlöcher, um Sandstürme freizuschalten',
    stormsFullAria: 'Maximale Anzahl an Sandstürmen erreicht', stormsBuyAria: 'Sandsturm für {cost} Steine beschwören',
  },
};

const counter = document.querySelector('#stone-count');
const game = document.querySelector('.game');
const futurePanel = document.querySelector('.future-panel');
const languageSelect = document.querySelector('#language-select');
const stoneValue = document.querySelector('#stone-value');
const rateValue = document.querySelector('#rate-value');
const perClickValue = document.querySelector('#per-click-value');
const clickX2Button = document.querySelector('#buy-click-x2');
const clickX2Cost = document.querySelector('#click-x2-cost');
const totalValue = document.querySelector('#total-value');
const clicksValue = document.querySelector('#clicks-value');
const stone = document.querySelector('#stone');
const skinOptions = [...document.querySelectorAll('[data-stone-skin]')];
const desertSkinLock = document.querySelector('.skin-option--desert .skin-option__lock');
const citySkinLock = document.querySelector('.skin-option--city .skin-option__lock');
const biomeChip = document.querySelector('#biome-chip');
const biomeBanner = document.querySelector('#biome-banner');
const crewCount = document.querySelector('#crew-count');
const crewRoster = document.querySelector('#crew-roster');
const crewPeople = [...document.querySelectorAll('.crew-person')];
const crewCard = document.querySelector('.crew-card');
const crewTarget = document.querySelector('#crew-target');
const crewTargetPerson = document.querySelector('.crew-target__person');
const hireButton = document.querySelector('#hire-person');
const hireLabel = document.querySelector('#hire-label');
const hirePrice = document.querySelector('#hire-price');
const crewCost = document.querySelector('#crew-cost');
const salesCard = document.querySelector('.sales-card');
const salesRoster = document.querySelector('#sales-roster');
const salesPeople = [...document.querySelectorAll('.sales-person')];
const salesCount = document.querySelector('#sales-count');
const salesButton = document.querySelector('#recruit-sales');
const salesHireLabel = document.querySelector('#sales-hire-label');
const salesHirePrice = document.querySelector('#sales-hire-price');
const salesCost = document.querySelector('#sales-cost');
const creatorsCard = document.querySelector('.creators-card');
const desertWorldCard = document.querySelector('.desert-world-card');
const creatorsRoster = document.querySelector('#creators-roster');
const creatorPeople = [...document.querySelectorAll('.creator-person')];
const creatorsCount = document.querySelector('#creators-count');
const creatorButton = document.querySelector('#invite-creator');
const creatorHireLabel = document.querySelector('#creator-hire-label');
const creatorHirePrice = document.querySelector('#creator-hire-price');
const creatorCost = document.querySelector('#creator-cost');
const waterCard = document.querySelector('.water-card');
const waterRoster = document.querySelector('#water-roster');
const waterSources = [...document.querySelectorAll('.water-source')];
const waterCount = document.querySelector('#water-count');
const waterButton = document.querySelector('#build-water');
const waterBuildLabel = document.querySelector('#water-build-label');
const waterBuildPrice = document.querySelector('#water-build-price');
const waterCost = document.querySelector('#water-cost');
const diggersCard = document.querySelector('.diggers-card');
const diggersRoster = document.querySelector('#diggers-roster');
const diggerPeople = [...document.querySelectorAll('.digger-person')];
const diggersCount = document.querySelector('#diggers-count');
const diggerButton = document.querySelector('#hire-digger');
const diggerHireLabel = document.querySelector('#digger-hire-label');
const diggerHirePrice = document.querySelector('#digger-hire-price');
const diggerCost = document.querySelector('#digger-cost');
const cactusCard = document.querySelector('.cactus-card');
const cactusRoster = document.querySelector('#cactus-roster');
const cactusPlants = [...document.querySelectorAll('.cactus-plant')];
const cactusCount = document.querySelector('#cactus-count');
const cactusButton = document.querySelector('#plant-cactus');
const cactusBuyLabel = document.querySelector('#cactus-buy-label');
const cactusBuyPrice = document.querySelector('#cactus-buy-price');
const cactusCost = document.querySelector('#cactus-cost');
const tractorsCard = document.querySelector('.tractors-card');
const tractorsRoster = document.querySelector('#tractors-roster');
const tractorMachines = [...document.querySelectorAll('.tractor-machine')];
const tractorsCount = document.querySelector('#tractors-count');
const tractorButton = document.querySelector('#buy-tractor');
const tractorBuyLabel = document.querySelector('#tractor-buy-label');
const tractorBuyPrice = document.querySelector('#tractor-buy-price');
const tractorCost = document.querySelector('#tractor-cost');
const holesCard = document.querySelector('.holes-card');
const holesRoster = document.querySelector('#holes-roster');
const stoneHoles = [...document.querySelectorAll('.stone-hole')];
const holesCount = document.querySelector('#holes-count');
const holeButton = document.querySelector('#open-hole');
const holeBuyLabel = document.querySelector('#hole-buy-label');
const holeBuyPrice = document.querySelector('#hole-buy-price');
const holeCost = document.querySelector('#hole-cost');
const stormsCard = document.querySelector('.storms-card');
const stormsRoster = document.querySelector('#storms-roster');
const sandstorms = [...document.querySelectorAll('.sandstorm')];
const stormsCount = document.querySelector('#storms-count');
const stormButton = document.querySelector('#summon-storm');
const stormBuyLabel = document.querySelector('#storm-buy-label');
const stormBuyPrice = document.querySelector('#storm-buy-price');
const stormCost = document.querySelector('#storm-cost');
const cityCard = document.querySelector('.city-card');
const jackhammersCard = document.querySelector('.jackhammers-card');
const jackhammersRoster = document.querySelector('#jackhammers-roster');
const jackhammerWorkers = [...document.querySelectorAll('.jackhammer-worker')];
const jackhammersCount = document.querySelector('#jackhammers-count');
const jackhammerButton = document.querySelector('#buy-jackhammer');
const jackhammerBuyLabel = document.querySelector('#jackhammer-buy-label');
const jackhammerBuyPrice = document.querySelector('#jackhammer-buy-price');
const jackhammerCost = document.querySelector('#jackhammer-cost');
const cementMixersCard = document.querySelector('.cement-mixers-card');
const cementMixersRoster = document.querySelector('#cement-mixers-roster');
const cementMixerMachines = [...document.querySelectorAll('.cement-mixer-machine')];
const cementMixersCount = document.querySelector('#cement-mixers-count');
const cementMixerButton = document.querySelector('#buy-cement-mixer');
const cementMixerBuyLabel = document.querySelector('#cement-mixer-buy-label');
const cementMixerBuyPrice = document.querySelector('#cement-mixer-buy-price');
const cementMixerCost = document.querySelector('#cement-mixer-cost');
const resetProgressButton = document.querySelector('#reset-progress');

function createInitialState() {
  return {
    stones: 0,
    totalStones: 0,
    clicks: 0,
    clickX2Level: 0,
    people: 1,
    crewProgressMs: 0,
    sales: 0,
    salesProgressMs: 0,
    creators: 0,
    creatorProgressMs: 0,
    waterSources: 0,
    waterProgressMs: 0,
    diggers: 0,
    diggerProgressMs: 0,
    cacti: 0,
    cactusProgressMs: 0,
    tractors: 0,
    tractorProgressMs: 0,
    holes: 0,
    holeProgressMs: 0,
    storms: 0,
    stormProgressMs: 0,
    jackhammers: 0,
    jackhammerProgressMs: 0,
    cementMixers: 0,
    cementMixerProgressMs: 0,
    silverfishProgressMs: 0,
    silverfishNextIntervalMs: 0,
    silverfishEventVersion: SILVERFISH_EVENT_VERSION,
    maxClickCps: SILVERFISH_DEFAULT_MAX_CPS,
    desertIntroSeen: false,
    cityIntroSeen: false,
    stoneSkin: 'classic',
    language: 'en',
    lastSaved: Date.now(),
  };
}

function loadState() {
  const fresh = createInitialState();

  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!saved) return fresh;

    return {
      stones: Number.isFinite(saved.stones) ? Math.max(0, saved.stones) : 0,
      totalStones: Number.isFinite(saved.totalStones) ? Math.max(0, saved.totalStones) : 0,
      clicks: Number.isFinite(saved.clicks) ? Math.max(0, saved.clicks) : 0,
      clickX2Level: Number.isFinite(saved.clickX2Level) ? Math.max(0, Math.floor(saved.clickX2Level)) : 0,
      people: Number.isFinite(saved.people) ? Math.min(MAX_PEOPLE, Math.max(1, Math.floor(saved.people))) : 1,
      crewProgressMs: Number.isFinite(saved.crewProgressMs)
        ? Math.min(CREW_DROP_INTERVAL - 1, Math.max(0, saved.crewProgressMs))
        : 0,
      sales: Number.isFinite(saved.sales) ? Math.min(MAX_SALES, Math.max(0, Math.floor(saved.sales))) : 0,
      salesProgressMs: Number.isFinite(saved.salesProgressMs)
        ? Math.min(SALES_INTERVAL - 1, Math.max(0, saved.salesProgressMs))
        : 0,
      creators: Number.isFinite(saved.creators)
        ? Math.min(MAX_CREATORS, Math.max(0, Math.floor(saved.creators)))
        : 0,
      creatorProgressMs: Number.isFinite(saved.creatorProgressMs)
        ? Math.min(CREATOR_INTERVAL - 1, Math.max(0, saved.creatorProgressMs))
        : 0,
      waterSources: Number.isFinite(saved.waterSources)
        ? Math.min(MAX_WATER_SOURCES, Math.max(0, Math.floor(saved.waterSources)))
        : 0,
      waterProgressMs: Number.isFinite(saved.waterProgressMs)
        ? Math.min(WATER_INTERVAL - 1, Math.max(0, saved.waterProgressMs))
        : 0,
      diggers: Number.isFinite(saved.diggers) ? Math.min(MAX_DIGGERS, Math.max(0, Math.floor(saved.diggers))) : 0,
      diggerProgressMs: Number.isFinite(saved.diggerProgressMs)
        ? Math.min(DIGGER_INTERVAL - 1, Math.max(0, saved.diggerProgressMs))
        : 0,
      cacti: Number.isFinite(saved.cacti) ? Math.min(MAX_CACTI, Math.max(0, Math.floor(saved.cacti))) : 0,
      cactusProgressMs: Number.isFinite(saved.cactusProgressMs)
        ? Math.min(CACTUS_INTERVAL - 1, Math.max(0, saved.cactusProgressMs))
        : 0,
      tractors: Number.isFinite(saved.tractors)
        ? Math.min(MAX_TRACTORS, Math.max(0, Math.floor(saved.tractors)))
        : 0,
      tractorProgressMs: Number.isFinite(saved.tractorProgressMs)
        ? Math.min(TRACTOR_INTERVAL - 1, Math.max(0, saved.tractorProgressMs))
        : 0,
      holes: Number.isFinite(saved.holes) ? Math.min(MAX_HOLES, Math.max(0, Math.floor(saved.holes))) : 0,
      holeProgressMs: Number.isFinite(saved.holeProgressMs)
        ? Math.min(HOLE_INTERVAL - 1, Math.max(0, saved.holeProgressMs))
        : 0,
      storms: Number.isFinite(saved.storms) ? Math.min(MAX_STORMS, Math.max(0, Math.floor(saved.storms))) : 0,
      stormProgressMs: Number.isFinite(saved.stormProgressMs)
        ? Math.min(STORM_INTERVAL - 1, Math.max(0, saved.stormProgressMs))
        : 0,
      jackhammers: Number.isFinite(saved.jackhammers)
        ? Math.min(MAX_JACKHAMMERS, Math.max(0, Math.floor(saved.jackhammers)))
        : 0,
      jackhammerProgressMs: Number.isFinite(saved.jackhammerProgressMs)
        ? Math.min(JACKHAMMER_INTERVAL - 1, Math.max(0, saved.jackhammerProgressMs))
        : 0,
      cementMixers: Number.isFinite(saved.cementMixers)
        ? Math.min(MAX_CEMENT_MIXERS, Math.max(0, Math.floor(saved.cementMixers)))
        : 0,
      cementMixerProgressMs: Number.isFinite(saved.cementMixerProgressMs)
        ? Math.min(CEMENT_MIXER_INTERVAL - 1, Math.max(0, saved.cementMixerProgressMs))
        : 0,
      silverfishProgressMs:
        saved.silverfishEventVersion === SILVERFISH_EVENT_VERSION && Number.isFinite(saved.silverfishProgressMs)
          ? Math.max(0, saved.silverfishProgressMs)
          : 0,
      silverfishNextIntervalMs:
        saved.silverfishEventVersion === SILVERFISH_EVENT_VERSION && Number.isFinite(saved.silverfishNextIntervalMs)
          ? Math.min(SILVERFISH_MAX_INTERVAL, Math.max(SILVERFISH_MIN_INTERVAL, saved.silverfishNextIntervalMs))
          : 0,
      silverfishEventVersion: SILVERFISH_EVENT_VERSION,
      maxClickCps: Number.isFinite(saved.maxClickCps)
        ? Math.max(1, Math.min(20, saved.maxClickCps))
        : SILVERFISH_DEFAULT_MAX_CPS,
      desertIntroSeen: saved.desertIntroSeen === true,
      cityIntroSeen: saved.cityIntroSeen === true,
      stoneSkin: ['classic', 'desert', 'city'].includes(saved.stoneSkin) ? saved.stoneSkin : null,
      language: ['en', 'ru', 'de'].includes(saved.language) ? saved.language : 'en',
      lastSaved: Number.isFinite(saved.lastSaved) ? saved.lastSaved : Date.now(),
    };
  } catch {
    return fresh;
  }
}

let state = loadState();

function t(key) {
  return TRANSLATIONS[state.language][key] ?? TRANSLATIONS.en[key] ?? key;
}

function tf(key, values) {
  return Object.entries(values).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, value),
    t(key),
  );
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  languageSelect.value = state.language;
  languageSelect.setAttribute('aria-label', t('language'));
  game.setAttribute('aria-label', t('mainAria'));
  futurePanel.setAttribute('aria-label', t('futureAria'));
  stone.setAttribute('aria-label', t('stoneAria'));
  crewTarget.setAttribute('aria-label', t('targetAria'));
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  salesCard.dataset.lockLabel = t('locked').toUpperCase();
  creatorsCard.dataset.lockLabel = t('locked').toUpperCase();
  desertWorldCard.dataset.lockLabel = t('locked').toUpperCase();
  waterCard.dataset.lockLabel = t('locked').toUpperCase();
  diggersCard.dataset.lockLabel = t('locked').toUpperCase();
  cactusCard.dataset.lockLabel = t('locked').toUpperCase();
  tractorsCard.dataset.lockLabel = t('locked').toUpperCase();
  holesCard.dataset.lockLabel = t('locked').toUpperCase();
  stormsCard.dataset.lockLabel = t('locked').toUpperCase();
  cityCard.dataset.lockLabel = t('locked').toUpperCase();
  jackhammersCard.dataset.lockLabel = t('locked').toUpperCase();
  cementMixersCard.dataset.lockLabel = t('locked').toUpperCase();
}

function saveState() {
  state.lastSaved = Date.now();

  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  } catch {
    // The clicker still works when storage is unavailable.
  }
}

const SUFFIXES = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc'];

function formatNumber(value) {
  if (value < 1000) return Math.floor(value).toString();

  const tier = Math.min(Math.floor(Math.log10(value) / 3), SUFFIXES.length - 1);
  const scaled = value / 1000 ** tier;
  return `${scaled.toFixed(scaled < 10 ? 2 : 1)}${SUFFIXES[tier]}`;
}

function renderStoneValue(value) {
  const characters = [...value].map((character) => {
    const digit = document.createElement('span');
    digit.className = 'stone-digit';
    digit.textContent = character;
    return digit;
  });

  stoneValue.replaceChildren(...characters);
}

function stonesPerSecond() {
  const crewRate = state.people / (CREW_DROP_INTERVAL / 1000);
  const salesRate = (state.sales * SALES_STONES_PER_SWING) / (SALES_INTERVAL / 1000);
  const creatorRate = (state.creators * CREATOR_STONES_PER_SEARCH) / (CREATOR_INTERVAL / 1000);
  const waterRate = (state.waterSources * WATER_STONES_PER_FLOW) / (WATER_INTERVAL / 1000);
  const diggerRate = (state.diggers * DIGGER_STONES_PER_SCOOP) / (DIGGER_INTERVAL / 1000);
  const cactusRate = (state.cacti * CACTUS_STONES_PER_GROWTH) / (CACTUS_INTERVAL / 1000);
  const tractorRate = (state.tractors * TRACTOR_STONES_PER_SCOOP) / (TRACTOR_INTERVAL / 1000);
  const holeRate = (state.holes * HOLE_STONES_PER_DROP) / (HOLE_INTERVAL / 1000);
  const stormRate = (state.storms * STORM_STONES_PER_SWIRL) / (STORM_INTERVAL / 1000);
  const jackhammerRate = (state.jackhammers * JACKHAMMER_STONES_PER_HIT) / (JACKHAMMER_INTERVAL / 1000);
  const cementMixerRate = (state.cementMixers * CEMENT_MIXER_STONES_PER_SPIN) / (CEMENT_MIXER_INTERVAL / 1000);
  return crewRate + salesRate + creatorRate + waterRate + diggerRate + cactusRate + tractorRate + holeRate + stormRate + jackhammerRate + cementMixerRate;
}

function nextPersonCost() {
  return Math.ceil(BASE_PERSON_COST * PERSON_COST_GROWTH ** (state.people - 1));
}

function nextSalesCost() {
  return Math.ceil(BASE_SALES_COST * SALES_COST_GROWTH ** state.sales);
}

function nextCreatorCost() {
  return Math.ceil(BASE_CREATOR_COST * CREATOR_COST_GROWTH ** state.creators);
}

function nextWaterCost() {
  return Math.ceil(BASE_WATER_COST * WATER_COST_GROWTH ** state.waterSources);
}

function nextDiggerCost() {
  return Math.ceil(BASE_DIGGER_COST * DIGGER_COST_GROWTH ** state.diggers);
}

function nextCactusCost() {
  return Math.ceil(BASE_CACTUS_COST * CACTUS_COST_GROWTH ** state.cacti);
}

function nextTractorCost() {
  return Math.ceil(BASE_TRACTOR_COST * TRACTOR_COST_GROWTH ** state.tractors);
}

function nextHoleCost() {
  return Math.ceil(BASE_HOLE_COST * HOLE_COST_GROWTH ** state.holes);
}

function nextStormCost() {
  return Math.ceil(BASE_STORM_COST * STORM_COST_GROWTH ** state.storms);
}

function nextJackhammerCost() {
  return Math.ceil(BASE_JACKHAMMER_COST * JACKHAMMER_COST_GROWTH ** state.jackhammers);
}

function nextCementMixerCost() {
  return Math.ceil(BASE_CEMENT_MIXER_COST * CEMENT_MIXER_COST_GROWTH ** state.cementMixers);
}

function clickPower() {
  return 2 ** state.clickX2Level;
}

function nextClickX2Cost() {
  return Math.ceil(BASE_CLICK_X2_COST * CLICK_X2_COST_GROWTH ** state.clickX2Level);
}

function formatRate(value) {
  return Number.isInteger(value) ? value.toString() : value.toFixed(2);
}

function gainStones(amount) {
  state.stones += amount;
  state.totalStones += amount;
}

function renderCrew() {
  const isFull = state.people >= MAX_PEOPLE;
  const cost = nextPersonCost();

  crewCount.textContent = state.people;
  crewRoster.setAttribute('aria-label', tf('crewRosterAria', { count: state.people }));
  crewPeople.forEach((person, index) => person.classList.toggle('crew-person--active', index < state.people));

  hireLabel.textContent = isFull ? t('crewFull') : t('hire');
  hirePrice.hidden = isFull;
  crewCost.textContent = formatNumber(cost);
  hireButton.disabled = isFull || state.stones < cost;
  hireButton.setAttribute(
    'aria-label',
    isFull ? t('crewFullAria') : tf('hirePersonAria', { cost: formatNumber(cost) }),
  );
}

function renderSales() {
  const isLocked = state.people < MAX_PEOPLE;
  const isFull = state.sales >= MAX_SALES;
  const cost = nextSalesCost();

  salesCard.classList.toggle('upgrade-card--locked', isLocked);
  salesCount.textContent = state.sales;
  salesRoster.setAttribute('aria-label', tf('salesRosterAria', { count: state.sales }));
  salesPeople.forEach((person, index) => person.classList.toggle('sales-person--active', index < state.sales));

  salesHireLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('recruit');
  salesHirePrice.hidden = isLocked || isFull;
  salesCost.textContent = formatNumber(cost);
  salesButton.disabled = isLocked || isFull || state.stones < cost;
  salesButton.setAttribute(
    'aria-label',
    isLocked
      ? t('salesLockedAria')
      : isFull
        ? t('salesFullAria')
        : tf('salesBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderCreators() {
  const isLocked = state.sales < MAX_SALES;
  const isFull = state.creators >= MAX_CREATORS;
  const cost = nextCreatorCost();

  creatorsCard.classList.toggle('upgrade-card--locked', isLocked);
  creatorsCount.textContent = state.creators;
  creatorsRoster.setAttribute('aria-label', tf('creatorsRosterAria', { count: state.creators }));
  creatorPeople.forEach((person, index) => person.classList.toggle('creator-person--active', index < state.creators));

  creatorHireLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('invite');
  creatorHirePrice.hidden = isLocked || isFull;
  creatorCost.textContent = formatNumber(cost);
  creatorButton.disabled = isLocked || isFull || state.stones < cost;
  creatorButton.setAttribute(
    'aria-label',
    isLocked
      ? t('creatorsLockedAria')
      : isFull
        ? t('creatorsFullAria')
        : tf('creatorsBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderDesertWorld() {
  const unlocked = state.creators >= MAX_CREATORS;
  desertWorldCard.classList.toggle('upgrade-card--locked', !unlocked);
}

function renderWaterSources() {
  const isLocked = state.creators < MAX_CREATORS;
  const isFull = state.waterSources >= MAX_WATER_SOURCES;
  const cost = nextWaterCost();

  waterCard.classList.toggle('upgrade-card--locked', isLocked);
  waterCount.textContent = state.waterSources;
  waterRoster.setAttribute('aria-label', tf('waterRosterAria', { count: state.waterSources }));
  waterSources.forEach((source, index) => source.classList.toggle('water-source--active', index < state.waterSources));

  waterBuildLabel.textContent = isLocked ? t('locked') : isFull ? t('allFlowing') : t('build');
  waterBuildPrice.hidden = isLocked || isFull;
  waterCost.textContent = formatNumber(cost);
  waterButton.disabled = isLocked || isFull || state.stones < cost;
  waterButton.setAttribute(
    'aria-label',
    isLocked
      ? t('waterLockedAria')
      : isFull
        ? t('waterFullAria')
        : tf('waterBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderDiggers() {
  const isLocked = state.waterSources < MAX_WATER_SOURCES;
  const isFull = state.diggers >= MAX_DIGGERS;
  const cost = nextDiggerCost();

  diggersCard.classList.toggle('upgrade-card--locked', isLocked);
  diggersCount.textContent = state.diggers;
  diggersRoster.setAttribute('aria-label', tf('diggersRosterAria', { count: state.diggers }));
  diggerPeople.forEach((person, index) => person.classList.toggle('digger-person--active', index < state.diggers));

  diggerHireLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('hire');
  diggerHirePrice.hidden = isLocked || isFull;
  diggerCost.textContent = formatNumber(cost);
  diggerButton.disabled = isLocked || isFull || state.stones < cost;
  diggerButton.setAttribute(
    'aria-label',
    isLocked
      ? t('diggersLockedAria')
      : isFull
        ? t('diggersFullAria')
        : tf('diggersBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderCacti() {
  const isLocked = state.diggers < MAX_DIGGERS;
  const isFull = state.cacti >= MAX_CACTI;
  const cost = nextCactusCost();

  cactusCard.classList.toggle('upgrade-card--locked', isLocked);
  cactusCount.textContent = state.cacti;
  cactusRoster.setAttribute('aria-label', tf('cactusRosterAria', { count: state.cacti }));
  cactusPlants.forEach((plant, index) => plant.classList.toggle('cactus-plant--active', index < state.cacti));

  cactusBuyLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('plant');
  cactusBuyPrice.hidden = isLocked || isFull;
  cactusCost.textContent = formatNumber(cost);
  cactusButton.disabled = isLocked || isFull || state.stones < cost;
  cactusButton.setAttribute(
    'aria-label',
    isLocked
      ? t('cactusLockedAria')
      : isFull
        ? t('cactusFullAria')
        : tf('cactusBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderTractors() {
  const isLocked = state.cacti < MAX_CACTI;
  const isFull = state.tractors >= MAX_TRACTORS;
  const cost = nextTractorCost();

  tractorsCard.classList.toggle('upgrade-card--locked', isLocked);
  tractorsCount.textContent = state.tractors;
  tractorsRoster.setAttribute('aria-label', tf('tractorsRosterAria', { count: state.tractors }));
  tractorMachines.forEach((tractor, index) => tractor.classList.toggle('tractor-machine--active', index < state.tractors));

  tractorBuyLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('buy');
  tractorBuyPrice.hidden = isLocked || isFull;
  tractorCost.textContent = formatNumber(cost);
  tractorButton.disabled = isLocked || isFull || state.stones < cost;
  tractorButton.setAttribute(
    'aria-label',
    isLocked
      ? t('tractorsLockedAria')
      : isFull
        ? t('tractorsFullAria')
        : tf('tractorsBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderHoles() {
  const isLocked = state.tractors < MAX_TRACTORS;
  const isFull = state.holes >= MAX_HOLES;
  const cost = nextHoleCost();

  holesCard.classList.toggle('upgrade-card--locked', isLocked);
  holesCount.textContent = state.holes;
  holesRoster.setAttribute('aria-label', tf('holesRosterAria', { count: state.holes }));
  stoneHoles.forEach((hole, index) => hole.classList.toggle('stone-hole--active', index < state.holes));

  holeBuyLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('open');
  holeBuyPrice.hidden = isLocked || isFull;
  holeCost.textContent = formatNumber(cost);
  holeButton.disabled = isLocked || isFull || state.stones < cost;
  holeButton.setAttribute(
    'aria-label',
    isLocked
      ? t('holesLockedAria')
      : isFull
        ? t('holesFullAria')
        : tf('holesBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderStorms() {
  const isLocked = state.holes < MAX_HOLES;
  const isFull = state.storms >= MAX_STORMS;
  const cost = nextStormCost();

  stormsCard.classList.toggle('upgrade-card--locked', isLocked);
  stormsCount.textContent = state.storms;
  stormsRoster.setAttribute('aria-label', tf('stormsRosterAria', { count: state.storms }));
  sandstorms.forEach((storm, index) => storm.classList.toggle('sandstorm--active', index < state.storms));

  stormBuyLabel.textContent = isLocked ? t('locked') : isFull ? t('teamFull') : t('summon');
  stormBuyPrice.hidden = isLocked || isFull;
  stormCost.textContent = formatNumber(cost);
  stormButton.disabled = isLocked || isFull || state.stones < cost;
  stormButton.setAttribute(
    'aria-label',
    isLocked
      ? t('stormsLockedAria')
      : isFull
        ? t('stormsFullAria')
        : tf('stormsBuyAria', { cost: formatNumber(cost) }),
  );
}

function renderCity() {
  const cityUnlocked = state.storms >= MAX_STORMS;
  cityCard.classList.toggle('upgrade-card--locked', !cityUnlocked);
  jackhammersCard.classList.toggle('upgrade-card--locked', !cityUnlocked);

  const isFull = state.jackhammers >= MAX_JACKHAMMERS;
  const cost = nextJackhammerCost();

  jackhammersCount.textContent = state.jackhammers;
  jackhammersRoster.setAttribute('aria-label', tf('jackhammersRosterAria', { count: state.jackhammers }));
  jackhammerWorkers.forEach((worker, index) => worker.classList.toggle('jackhammer-worker--active', index < state.jackhammers));

  jackhammerBuyLabel.textContent = !cityUnlocked ? t('locked') : isFull ? t('teamFull') : t('buy');
  jackhammerBuyPrice.hidden = !cityUnlocked || isFull;
  jackhammerCost.textContent = formatNumber(cost);
  jackhammerButton.disabled = !cityUnlocked || isFull || state.stones < cost;
  jackhammerButton.setAttribute(
    'aria-label',
    !cityUnlocked
      ? t('jackhammersLockedAria')
      : isFull
        ? t('jackhammersFullAria')
        : tf('jackhammersBuyAria', { cost: formatNumber(cost) }),
  );

  const cementMixersUnlocked = state.jackhammers >= MAX_JACKHAMMERS;
  const cementMixersFull = state.cementMixers >= MAX_CEMENT_MIXERS;
  const cementMixerNextCost = nextCementMixerCost();

  cementMixersCard.classList.toggle('upgrade-card--locked', !cementMixersUnlocked);
  cementMixersCount.textContent = state.cementMixers;
  cementMixersRoster.setAttribute('aria-label', tf('cementMixersRosterAria', { count: state.cementMixers }));
  cementMixerMachines.forEach((machine, index) => machine.classList.toggle('cement-mixer-machine--active', index < state.cementMixers));

  cementMixerBuyLabel.textContent = !cementMixersUnlocked ? t('locked') : cementMixersFull ? t('teamFull') : t('buy');
  cementMixerBuyPrice.hidden = !cementMixersUnlocked || cementMixersFull;
  cementMixerCost.textContent = formatNumber(cementMixerNextCost);
  cementMixerButton.disabled = !cementMixersUnlocked || cementMixersFull || state.stones < cementMixerNextCost;
  cementMixerButton.setAttribute(
    'aria-label',
    !cementMixersUnlocked
      ? t('cementMixersLockedAria')
      : cementMixersFull
        ? t('cementMixersFullAria')
        : tf('cementMixersBuyAria', { cost: formatNumber(cementMixerNextCost) }),
  );
}

function renderBiome() {
  const desertUnlocked = state.creators >= MAX_CREATORS || state.waterSources > 0;
  const cityUnlocked = state.storms >= MAX_STORMS;
  const shouldRevealDesert = desertUnlocked && !state.desertIntroSeen;
  const shouldRevealCity = cityUnlocked && !state.cityIntroSeen;

  if (!state.stoneSkin) state.stoneSkin = desertUnlocked ? 'desert' : 'classic';
  if (shouldRevealDesert) state.stoneSkin = 'desert';
  if (shouldRevealCity) state.stoneSkin = 'city';

  const usesDesertSkin = desertUnlocked && state.stoneSkin === 'desert';
  const usesCitySkin = cityUnlocked && state.stoneSkin === 'city';

  game.classList.toggle('game--desert', usesDesertSkin);
  stone.classList.toggle('stone--desert', usesDesertSkin);
  stone.classList.toggle('stone--city', usesCitySkin);
  biomeChip.hidden = !desertUnlocked;

  skinOptions.forEach((option) => {
    const skin = option.dataset.stoneSkin;
    const isLocked =
      (skin === 'desert' && !desertUnlocked)
      || (skin === 'city' && !cityUnlocked);
    const skinName = t(
      skin === 'city' ? 'citySkin' : skin === 'desert' ? 'desertSkin' : 'classicSkin',
    );
    option.disabled = isLocked;
    option.classList.toggle('skin-option--selected', state.stoneSkin === skin);
    option.setAttribute('aria-pressed', String(state.stoneSkin === skin));
    option.setAttribute('aria-label', tf(isLocked ? 'skinLockedAria' : 'skinOptionAria', { skin: skinName }));
  });

  desertSkinLock.hidden = desertUnlocked;
  citySkinLock.hidden = cityUnlocked;

  if (!shouldRevealDesert && !shouldRevealCity) return;

  if (shouldRevealDesert) state.desertIntroSeen = true;
  if (shouldRevealCity) state.cityIntroSeen = true;

  const bannerTitle = biomeBanner.querySelector('.biome-banner__title');
  if (bannerTitle) {
    const key = shouldRevealCity ? 'cityUpper' : 'desertUpper';
    bannerTitle.dataset.i18n = key;
    bannerTitle.textContent = t(key);
  }

  biomeBanner.hidden = false;
  biomeBanner.classList.remove('biome-banner--show');
  void biomeBanner.offsetWidth;
  biomeBanner.classList.add('biome-banner--show');

  window.setTimeout(() => {
    biomeBanner.classList.remove('biome-banner--show');
    biomeBanner.hidden = true;
  }, 3000);

  saveState();
}

function silverfishLevel() {
  if (state.totalStones < SILVERFISH_UNLOCK_TOTAL) return 0;
  return Math.max(1, Math.floor(Math.log10(Math.max(state.totalStones, SILVERFISH_UNLOCK_TOTAL))) - 1);
}

function chooseSilverfishInterval() {
  return Math.floor(
    SILVERFISH_MIN_INTERVAL
      + Math.random() * (SILVERFISH_MAX_INTERVAL - SILVERFISH_MIN_INTERVAL),
  );
}

function silverfishInterval() {
  if (silverfishLevel() === 0) return Infinity;
  if (!Number.isFinite(state.silverfishNextIntervalMs) || state.silverfishNextIntervalMs < SILVERFISH_MIN_INTERVAL) {
    state.silverfishNextIntervalMs = chooseSilverfishInterval();
  }
  return state.silverfishNextIntervalMs;
}

function silverfishCount() {
  if (silverfishLevel() === 0) return 0;
  return SILVERFISH_MIN_COUNT + Math.floor(Math.random() * (SILVERFISH_MAX_COUNT - SILVERFISH_MIN_COUNT + 1));
}

function silverfishRaidFraction() {
  return SILVERFISH_MIN_STEAL_FRACTION
    + Math.random() * (SILVERFISH_MAX_STEAL_FRACTION - SILVERFISH_MIN_STEAL_FRACTION);
}

function calculateSilverfishTheft() {
  const count = silverfishCount();
  if (count === 0 || state.stones <= 0) return { count: 0, stolen: 0 };

  const stolen = Math.max(1, Math.floor(state.stones * silverfishRaidFraction()));
  return { count, stolen: Math.min(state.stones, stolen) };
}

function silverfishHitPoints() {
  const measuredCps = Math.max(1, state.maxClickCps || SILVERFISH_DEFAULT_MAX_CPS);
  return Math.max(4, Math.min(30, Math.round(measuredCps * SILVERFISH_HP_SECONDS_AT_MAX_CPS)));
}

function showSilverfishHit(bug, remaining) {
  const hp = bug.querySelector('.silverfish__hp');
  if (hp) hp.textContent = `${Math.max(0, remaining)} HP`;

  bug.classList.remove('silverfish--hit');
  void bug.offsetWidth;
  bug.classList.add('silverfish--hit');
}

function spawnSilverfishVisual(count, raidStolen) {
  const rect = stone.getBoundingClientRect();
  const centerX = rect.left + rect.width * 0.5;
  const centerY = rect.top + rect.height * 0.56;
  const hpPerBug = silverfishHitPoints();
  const stealShares = Array.from({ length: count }, (_, index) => {
    const base = Math.floor(raidStolen / count);
    return base + (index < raidStolen % count ? 1 : 0);
  });

  for (let index = 0; index < count; index += 1) {
    const bug = document.createElement('button');
    bug.type = 'button';
    bug.className = 'silverfish';
    bug.setAttribute('aria-label', 'Silverfish');

    const side = index % 2 === 0 ? -1 : 1;
    const spread = 300 + Math.random() * 200;
    const vertical = (Math.random() - 0.5) * 220;
    const startX = centerX + side * spread;
    const startY = centerY + vertical;
    const targetOffsetX = side * (62 + (index % 3) * 30);
    const targetOffsetY = -60 + (index % 3) * 52;
    const arrivalDelay = 3600 + index * 180;

    bug.style.left = `${startX}px`;
    bug.style.top = `${startY}px`;
    bug.style.setProperty('--to-stone-x', `${centerX + targetOffsetX - startX}px`);
    bug.style.setProperty('--to-stone-y', `${centerY + targetOffsetY - startY}px`);
    bug.style.animationDelay = `${index * 180}ms`;

    let hp = hpPerBug;
    let stealTimer = null;
    let stealCount = 0;
    let stolenByBug = 0;
    const stealTarget = stealShares[index];

    const hpLabel = document.createElement('span');
    hpLabel.className = 'silverfish__hp';
    hpLabel.textContent = `${hp} HP`;
    bug.append(hpLabel);

    const finishEventForBug = () => {
      if (stealTimer) {
        window.clearInterval(stealTimer);
        stealTimer = null;
      }
      if (!bug.isConnected || bug.disabled) return;
      bug.disabled = true;
      bug.classList.add('silverfish--defeated');
      window.setTimeout(() => bug.remove(), 320);
    };

    const stealOnce = () => {
      if (!bug.isConnected || bug.disabled || state.stones <= 0 || stolenByBug >= stealTarget) {
        if (stolenByBug >= stealTarget) finishEventForBug();
        return;
      }

      const remaining = stealTarget - stolenByBug;
      const ticksLeft = Math.max(1, 3 - stealCount);
      const wanted = Math.ceil(remaining / ticksLeft);
      const stolen = Math.min(state.stones, wanted);
      if (stolen <= 0) return;

      stealCount += 1;
      stolenByBug += stolen;
      state.stones = Math.max(0, state.stones - stolen);

      const bugRect = bug.getBoundingClientRect();
      const label = document.createElement('span');
      label.className = 'silverfish-theft';
      label.textContent = `-${formatNumber(stolen)} 🪨`;
      label.style.left = `${bugRect.left + bugRect.width / 2}px`;
      label.style.top = `${bugRect.top}px`;
      document.body.append(label);
      label.addEventListener('animationend', () => label.remove());

      stone.classList.remove('stone--silverfish-hit');
      void stone.offsetWidth;
      stone.classList.add('stone--silverfish-hit');
      window.setTimeout(() => stone.classList.remove('stone--silverfish-hit'), 900);
      render();

      if (stolenByBug >= stealTarget || stealCount >= 3) finishEventForBug();
    };

    bug.addEventListener('click', (event) => {
      event.stopPropagation();
      hp -= 1;
      hpLabel.textContent = `${Math.max(0, hp)} HP`;

      if (hp <= 0) {
        finishEventForBug();
        return;
      }

      showSilverfishHit(bug, hp);
    });

    document.body.append(bug);

    window.setTimeout(() => {
      if (!bug.isConnected || bug.disabled) return;
      bug.classList.add('silverfish--at-stone');
      stealOnce();
      if (!bug.disabled) stealTimer = window.setInterval(stealOnce, 2400);
    }, arrivalDelay);
  }
}

function triggerSilverfishAttack(showVisual = true) {
  const { count, stolen } = calculateSilverfishTheft();
  if (count === 0 || stolen === 0) return 0;

  if (showVisual) {
    spawnSilverfishVisual(count, stolen);
  } else {
    state.stones = Math.max(0, state.stones - stolen);
  }
  return stolen;
}

function applyOfflineSilverfishTheft(elapsedMs) {
  if (silverfishLevel() === 0 || state.stones <= 0 || elapsedMs <= 0) {
    state.silverfishProgressMs = 0;
    return;
  }

  // Visible silverfish events should never be waiting at the door when the player opens the game.
  // Offline time may cause at most one small missed-event penalty, then the visible timer starts fresh.
  const missedEventThreshold = silverfishInterval();
  if (elapsedMs >= missedEventThreshold) {
    const { stolen } = calculateSilverfishTheft();
    if (stolen > 0) {
      const offlineCap = Math.max(1, Math.floor(state.stones * 0.08));
      state.stones = Math.max(0, state.stones - Math.min(stolen, offlineCap));
    }
  }

  state.silverfishProgressMs = 0;
  state.silverfishNextIntervalMs = chooseSilverfishInterval();
}

function render() {
  const stonesText = formatNumber(state.stones);
  counter.setAttribute('aria-label', tf('stonesAria', { count: stonesText }));
  renderStoneValue(stonesText);
  rateValue.textContent = formatRate(stonesPerSecond());
  perClickValue.textContent = formatNumber(clickPower());
  const clickUpgradeCost = nextClickX2Cost();
  clickX2Cost.textContent = formatNumber(clickUpgradeCost);
  clickX2Button.disabled = state.stones < clickUpgradeCost;
  clickX2Button.setAttribute('aria-label', tf('clickX2Aria', { cost: formatNumber(clickUpgradeCost) }));
  totalValue.textContent = formatNumber(state.totalStones);
  clicksValue.textContent = formatNumber(state.clicks);
  renderCrew();
  renderSales();
  renderCreators();
  renderDesertWorld();
  renderWaterSources();
  renderDiggers();
  renderCacti();
  renderTractors();
  renderHoles();
  renderStorms();
  renderCity();
  renderBiome();
  document.title = `${stonesText} ${t('stonesUnit')} — ${t('appTitle')}`;
}

languageSelect.addEventListener('change', () => {
  if (!['en', 'ru', 'de'].includes(languageSelect.value)) return;
  state.language = languageSelect.value;
  applyTranslations();
  saveState();
  render();
});

skinOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const skin = option.dataset.stoneSkin;
    const desertUnlocked = state.creators >= MAX_CREATORS || state.waterSources > 0;
    const cityUnlocked = state.storms >= MAX_STORMS;
    if (skin === 'desert' && !desertUnlocked) return;
    if (skin === 'city' && !cityUnlocked) return;
    state.stoneSkin = skin;
    saveState();
    renderBiome();
  });
});

function spawnFloatingText(x, y, amount = 1) {
  const label = document.createElement('span');
  label.className = 'floating-text';
  label.textContent = `+${formatNumber(amount)}`;
  label.style.left = `${x}px`;
  label.style.top = `${y}px`;
  document.body.append(label);
  label.addEventListener('animationend', () => label.remove());
}

const CHEAT_CODE = '2272';
let cheatBuffer = '';

document.addEventListener('keydown', (event) => {
  if (!/^[0-9]$/.test(event.key)) return;

  cheatBuffer = (cheatBuffer + event.key).slice(-CHEAT_CODE.length);
  if (cheatBuffer !== CHEAT_CODE) return;

  gainStones(10_000_000);
  cheatBuffer = '';
  saveState();
  render();
});

clickX2Button.addEventListener('click', () => {
  const cost = nextClickX2Cost();
  if (state.stones < cost) return;

  state.stones -= cost;
  state.clickX2Level += 1;
  saveState();
  render();
});

const recentStoneClicks = [];

function recordStoneClickSpeed() {
  const now = performance.now();
  recentStoneClicks.push(now);
  while (recentStoneClicks.length && recentStoneClicks[0] < now - 1500) recentStoneClicks.shift();

  if (recentStoneClicks.length < 2) return;
  const elapsed = Math.max(250, now - recentStoneClicks[0]);
  const cps = ((recentStoneClicks.length - 1) * 1000) / elapsed;
  if (cps > state.maxClickCps) state.maxClickCps = Math.min(20, cps);
}

stone.addEventListener('click', (event) => {
  recordStoneClickSpeed();
  const amount = clickPower();
  gainStones(amount);
  state.clicks += 1;

  const rect = stone.getBoundingClientRect();
  const x = event.clientX || rect.left + rect.width / 2;
  const y = event.clientY || rect.top + rect.height / 2;
  spawnFloatingText(x, y, amount);
  render();
});

hireButton.addEventListener('click', () => {
  if (state.people >= MAX_PEOPLE) return;

  const cost = nextPersonCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  state.people += 1;
  saveState();
  render();
});

salesButton.addEventListener('click', () => {
  if (state.people < MAX_PEOPLE || state.sales >= MAX_SALES) return;

  const cost = nextSalesCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.sales === 0) state.salesProgressMs = 0;
  state.sales += 1;
  saveState();
  render();
});

creatorButton.addEventListener('click', () => {
  if (state.sales < MAX_SALES || state.creators >= MAX_CREATORS) return;

  const cost = nextCreatorCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.creators === 0) state.creatorProgressMs = 0;
  state.creators += 1;
  saveState();
  render();
});

waterButton.addEventListener('click', () => {
  if (state.creators < MAX_CREATORS || state.waterSources >= MAX_WATER_SOURCES) return;

  const cost = nextWaterCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.waterSources === 0) state.waterProgressMs = 0;
  state.waterSources += 1;
  saveState();
  render();
});

diggerButton.addEventListener('click', () => {
  if (state.waterSources < MAX_WATER_SOURCES || state.diggers >= MAX_DIGGERS) return;

  const cost = nextDiggerCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.diggers === 0) state.diggerProgressMs = 0;
  state.diggers += 1;
  saveState();
  render();
});

cactusButton.addEventListener('click', () => {
  if (state.diggers < MAX_DIGGERS || state.cacti >= MAX_CACTI) return;

  const cost = nextCactusCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.cacti === 0) state.cactusProgressMs = 0;
  state.cacti += 1;
  saveState();
  render();
});

tractorButton.addEventListener('click', () => {
  if (state.cacti < MAX_CACTI || state.tractors >= MAX_TRACTORS) return;

  const cost = nextTractorCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.tractors === 0) state.tractorProgressMs = 0;
  state.tractors += 1;
  saveState();
  render();
});

holeButton.addEventListener('click', () => {
  if (state.tractors < MAX_TRACTORS || state.holes >= MAX_HOLES) return;

  const cost = nextHoleCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.holes === 0) state.holeProgressMs = 0;
  state.holes += 1;
  saveState();
  render();
});

stormButton.addEventListener('click', () => {
  if (state.holes < MAX_HOLES || state.storms >= MAX_STORMS) return;

  const cost = nextStormCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.storms === 0) state.stormProgressMs = 0;
  state.storms += 1;
  saveState();
  render();
});

jackhammerButton.addEventListener('click', () => {
  if (state.storms < MAX_STORMS || state.jackhammers >= MAX_JACKHAMMERS) return;

  const cost = nextJackhammerCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.jackhammers === 0) state.jackhammerProgressMs = 0;
  state.jackhammers += 1;
  saveState();
  render();
});

cementMixerButton.addEventListener('click', () => {
  if (state.jackhammers < MAX_JACKHAMMERS || state.cementMixers >= MAX_CEMENT_MIXERS) return;

  const cost = nextCementMixerCost();
  if (state.stones < cost) return;

  state.stones -= cost;
  if (state.cementMixers === 0) state.cementMixerProgressMs = 0;
  state.cementMixers += 1;
  saveState();
  render();
});

function playCrewVolley() {
  const cardRect = crewCard.getBoundingClientRect();
  const targetRect = crewTargetPerson.getBoundingClientRect();
  const targetX = targetRect.left - cardRect.left + targetRect.width / 2;
  const targetY = targetRect.top - cardRect.top + targetRect.height * 0.42;

  crewPeople.slice(0, state.people).forEach((person, index) => {
    const sourceRect = person.getBoundingClientRect();
    const sourceX = sourceRect.left - cardRect.left + sourceRect.width / 2;
    const sourceY = sourceRect.top - cardRect.top + sourceRect.height / 2;
    const flyingStone = document.createElement('span');
    flyingStone.className = 'flying-stone';
    flyingStone.style.left = `${sourceX}px`;
    flyingStone.style.top = `${sourceY}px`;
    flyingStone.style.setProperty('--travel-x', `${targetX - sourceX}px`);
    flyingStone.style.setProperty('--travel-y', `${targetY - sourceY}px`);
    flyingStone.style.setProperty('--travel-mid-x', `${(targetX - sourceX) * 0.52}px`);
    flyingStone.style.setProperty('--travel-mid-y', `${(targetY - sourceY) * 0.52}px`);
    flyingStone.style.animationDelay = `${index * 20}ms`;
    crewCard.append(flyingStone);
    flyingStone.addEventListener('animationend', () => flyingStone.remove());
  });

  window.setTimeout(() => {
    crewTarget.classList.remove('crew-target--hit');
    void crewTarget.offsetWidth;
    crewTarget.classList.add('crew-target--hit');
    window.setTimeout(() => crewTarget.classList.remove('crew-target--hit'), 440);
  }, 470);
}

function playSalesSwing() {
  salesCard.classList.remove('sales-card--mining');
  void salesCard.offsetWidth;
  salesCard.classList.add('sales-card--mining');
  window.setTimeout(() => salesCard.classList.remove('sales-card--mining'), 540);
}

function playCreatorSearch() {
  creatorsCard.classList.remove('creators-card--searching');
  void creatorsCard.offsetWidth;
  creatorsCard.classList.add('creators-card--searching');
  window.setTimeout(() => creatorsCard.classList.remove('creators-card--searching'), 680);
}

function playWaterFlow() {
  waterCard.classList.remove('water-card--flowing');
  void waterCard.offsetWidth;
  waterCard.classList.add('water-card--flowing');
  window.setTimeout(() => waterCard.classList.remove('water-card--flowing'), 700);
}

function playDiggerScoop() {
  diggersCard.classList.remove('diggers-card--digging');
  void diggersCard.offsetWidth;
  diggersCard.classList.add('diggers-card--digging');
  window.setTimeout(() => diggersCard.classList.remove('diggers-card--digging'), 700);
}

function playCactusGrowth() {
  cactusCard.classList.remove('cactus-card--growing');
  void cactusCard.offsetWidth;
  cactusCard.classList.add('cactus-card--growing');
  window.setTimeout(() => cactusCard.classList.remove('cactus-card--growing'), 720);
}

function playTractorScoop() {
  tractorsCard.classList.remove('tractors-card--scooping');
  void tractorsCard.offsetWidth;
  tractorsCard.classList.add('tractors-card--scooping');
  window.setTimeout(() => tractorsCard.classList.remove('tractors-card--scooping'), 760);
}

function playHoleDrop() {
  holesCard.classList.remove('holes-card--dropping');
  void holesCard.offsetWidth;
  holesCard.classList.add('holes-card--dropping');
  window.setTimeout(() => holesCard.classList.remove('holes-card--dropping'), 760);
}

function playStormSwirl() {
  stormsCard.classList.remove('storms-card--swirling');
  void stormsCard.offsetWidth;
  stormsCard.classList.add('storms-card--swirling');
  window.setTimeout(() => stormsCard.classList.remove('storms-card--swirling'), 820);
}

function playJackhammerHit() {
  jackhammersCard.classList.remove('jackhammers-card--hammering');
  void jackhammersCard.offsetWidth;
  jackhammersCard.classList.add('jackhammers-card--hammering');
  window.setTimeout(() => jackhammersCard.classList.remove('jackhammers-card--hammering'), 320);
}

function playCementMixerSpin() {
  cementMixersCard.classList.remove('cement-mixers-card--spinning');
  void cementMixersCard.offsetWidth;
  cementMixersCard.classList.add('cement-mixers-card--spinning');
  window.setTimeout(() => cementMixersCard.classList.remove('cement-mixers-card--spinning'), 760);
}

function applyOfflineProgress() {
  const elapsedMs = Math.min(Math.max(0, Date.now() - state.lastSaved), MAX_OFFLINE_SECONDS * 1000);
  const accumulatedMs = state.crewProgressMs + elapsedMs;
  const completedDrops = Math.floor(accumulatedMs / CREW_DROP_INTERVAL);
  state.crewProgressMs = accumulatedMs % CREW_DROP_INTERVAL;
  gainStones(completedDrops * state.people);

  if (state.sales > 0) {
    const accumulatedSalesMs = state.salesProgressMs + elapsedMs;
    const completedSalesSwings = Math.floor(accumulatedSalesMs / SALES_INTERVAL);
    state.salesProgressMs = accumulatedSalesMs % SALES_INTERVAL;
    gainStones(completedSalesSwings * state.sales * SALES_STONES_PER_SWING);
  } else {
    state.salesProgressMs = 0;
  }

  if (state.creators > 0) {
    const accumulatedCreatorMs = state.creatorProgressMs + elapsedMs;
    const completedCreatorSearches = Math.floor(accumulatedCreatorMs / CREATOR_INTERVAL);
    state.creatorProgressMs = accumulatedCreatorMs % CREATOR_INTERVAL;
    gainStones(completedCreatorSearches * state.creators * CREATOR_STONES_PER_SEARCH);
  } else {
    state.creatorProgressMs = 0;
  }

  if (state.waterSources > 0) {
    const accumulatedWaterMs = state.waterProgressMs + elapsedMs;
    const completedWaterFlows = Math.floor(accumulatedWaterMs / WATER_INTERVAL);
    state.waterProgressMs = accumulatedWaterMs % WATER_INTERVAL;
    gainStones(completedWaterFlows * state.waterSources * WATER_STONES_PER_FLOW);
  } else {
    state.waterProgressMs = 0;
  }

  if (state.diggers > 0) {
    const accumulatedDiggerMs = state.diggerProgressMs + elapsedMs;
    const completedDiggerScoops = Math.floor(accumulatedDiggerMs / DIGGER_INTERVAL);
    state.diggerProgressMs = accumulatedDiggerMs % DIGGER_INTERVAL;
    gainStones(completedDiggerScoops * state.diggers * DIGGER_STONES_PER_SCOOP);
  } else {
    state.diggerProgressMs = 0;
  }

  if (state.cacti > 0) {
    const accumulatedCactusMs = state.cactusProgressMs + elapsedMs;
    const completedCactusGrowths = Math.floor(accumulatedCactusMs / CACTUS_INTERVAL);
    state.cactusProgressMs = accumulatedCactusMs % CACTUS_INTERVAL;
    gainStones(completedCactusGrowths * state.cacti * CACTUS_STONES_PER_GROWTH);
  } else {
    state.cactusProgressMs = 0;
  }

  if (state.tractors > 0) {
    const accumulatedTractorMs = state.tractorProgressMs + elapsedMs;
    const completedTractorScoops = Math.floor(accumulatedTractorMs / TRACTOR_INTERVAL);
    state.tractorProgressMs = accumulatedTractorMs % TRACTOR_INTERVAL;
    gainStones(completedTractorScoops * state.tractors * TRACTOR_STONES_PER_SCOOP);
  } else {
    state.tractorProgressMs = 0;
  }

  if (state.holes > 0) {
    const accumulatedHoleMs = state.holeProgressMs + elapsedMs;
    const completedHoleDrops = Math.floor(accumulatedHoleMs / HOLE_INTERVAL);
    state.holeProgressMs = accumulatedHoleMs % HOLE_INTERVAL;
    gainStones(completedHoleDrops * state.holes * HOLE_STONES_PER_DROP);
  } else {
    state.holeProgressMs = 0;
  }

  if (state.storms > 0) {
    const accumulatedStormMs = state.stormProgressMs + elapsedMs;
    const completedStormSwirls = Math.floor(accumulatedStormMs / STORM_INTERVAL);
    state.stormProgressMs = accumulatedStormMs % STORM_INTERVAL;
    gainStones(completedStormSwirls * state.storms * STORM_STONES_PER_SWIRL);
  } else {
    state.stormProgressMs = 0;
  }

  if (state.jackhammers > 0) {
    const accumulatedJackhammerMs = state.jackhammerProgressMs + elapsedMs;
    const completedJackhammerHits = Math.floor(accumulatedJackhammerMs / JACKHAMMER_INTERVAL);
    state.jackhammerProgressMs = accumulatedJackhammerMs % JACKHAMMER_INTERVAL;
    gainStones(completedJackhammerHits * state.jackhammers * JACKHAMMER_STONES_PER_HIT);
  } else {
    state.jackhammerProgressMs = 0;
  }

  if (state.cementMixers > 0) {
    const accumulatedCementMixerMs = state.cementMixerProgressMs + elapsedMs;
    const completedCementMixerSpins = Math.floor(accumulatedCementMixerMs / CEMENT_MIXER_INTERVAL);
    state.cementMixerProgressMs = accumulatedCementMixerMs % CEMENT_MIXER_INTERVAL;
    gainStones(completedCementMixerSpins * state.cementMixers * CEMENT_MIXER_STONES_PER_SPIN);
  } else {
    state.cementMixerProgressMs = 0;
  }
  applyOfflineSilverfishTheft(elapsedMs);
  state.lastSaved = Date.now();
}

let lastTick = Date.now();

function tick() {
  const now = Date.now();
  const elapsedMs = now - lastTick;
  state.crewProgressMs += elapsedMs;
  if (state.sales > 0) state.salesProgressMs += elapsedMs;
  if (state.creators > 0) state.creatorProgressMs += elapsedMs;
  if (state.waterSources > 0) state.waterProgressMs += elapsedMs;
  if (state.diggers > 0) state.diggerProgressMs += elapsedMs;
  if (state.cacti > 0) state.cactusProgressMs += elapsedMs;
  if (state.tractors > 0) state.tractorProgressMs += elapsedMs;
  if (state.holes > 0) state.holeProgressMs += elapsedMs;
  if (state.storms > 0) state.stormProgressMs += elapsedMs;
  if (state.jackhammers > 0) state.jackhammerProgressMs += elapsedMs;
  if (state.cementMixers > 0) state.cementMixerProgressMs += elapsedMs;
  if (silverfishLevel() > 0) state.silverfishProgressMs += elapsedMs;
  lastTick = now;

  const completedDrops = Math.floor(state.crewProgressMs / CREW_DROP_INTERVAL);
  if (completedDrops > 0) {
    state.crewProgressMs %= CREW_DROP_INTERVAL;
    gainStones(completedDrops * state.people);
    playCrewVolley();
  }

  const completedSalesSwings = Math.floor(state.salesProgressMs / SALES_INTERVAL);
  if (completedSalesSwings > 0) {
    state.salesProgressMs %= SALES_INTERVAL;
    gainStones(completedSalesSwings * state.sales * SALES_STONES_PER_SWING);
    playSalesSwing();
  }

  const completedCreatorSearches = Math.floor(state.creatorProgressMs / CREATOR_INTERVAL);
  if (completedCreatorSearches > 0) {
    state.creatorProgressMs %= CREATOR_INTERVAL;
    gainStones(completedCreatorSearches * state.creators * CREATOR_STONES_PER_SEARCH);
    playCreatorSearch();
  }

  const completedWaterFlows = Math.floor(state.waterProgressMs / WATER_INTERVAL);
  if (completedWaterFlows > 0) {
    state.waterProgressMs %= WATER_INTERVAL;
    gainStones(completedWaterFlows * state.waterSources * WATER_STONES_PER_FLOW);
    playWaterFlow();
  }

  const completedDiggerScoops = Math.floor(state.diggerProgressMs / DIGGER_INTERVAL);
  if (completedDiggerScoops > 0) {
    state.diggerProgressMs %= DIGGER_INTERVAL;
    gainStones(completedDiggerScoops * state.diggers * DIGGER_STONES_PER_SCOOP);
    playDiggerScoop();
  }

  const completedCactusGrowths = Math.floor(state.cactusProgressMs / CACTUS_INTERVAL);
  if (completedCactusGrowths > 0) {
    state.cactusProgressMs %= CACTUS_INTERVAL;
    gainStones(completedCactusGrowths * state.cacti * CACTUS_STONES_PER_GROWTH);
    playCactusGrowth();
  }

  const completedTractorScoops = Math.floor(state.tractorProgressMs / TRACTOR_INTERVAL);
  if (completedTractorScoops > 0) {
    state.tractorProgressMs %= TRACTOR_INTERVAL;
    gainStones(completedTractorScoops * state.tractors * TRACTOR_STONES_PER_SCOOP);
    playTractorScoop();
  }

  const completedHoleDrops = Math.floor(state.holeProgressMs / HOLE_INTERVAL);
  if (completedHoleDrops > 0) {
    state.holeProgressMs %= HOLE_INTERVAL;
    gainStones(completedHoleDrops * state.holes * HOLE_STONES_PER_DROP);
    playHoleDrop();
  }

  const completedStormSwirls = Math.floor(state.stormProgressMs / STORM_INTERVAL);
  if (completedStormSwirls > 0) {
    state.stormProgressMs %= STORM_INTERVAL;
    gainStones(completedStormSwirls * state.storms * STORM_STONES_PER_SWIRL);
    playStormSwirl();
  }

  const completedJackhammerHits = Math.floor(state.jackhammerProgressMs / JACKHAMMER_INTERVAL);
  if (completedJackhammerHits > 0) {
    state.jackhammerProgressMs %= JACKHAMMER_INTERVAL;
    gainStones(completedJackhammerHits * state.jackhammers * JACKHAMMER_STONES_PER_HIT);
    playJackhammerHit();
  }

  const completedCementMixerSpins = Math.floor(state.cementMixerProgressMs / CEMENT_MIXER_INTERVAL);
  if (completedCementMixerSpins > 0) {
    state.cementMixerProgressMs %= CEMENT_MIXER_INTERVAL;
    gainStones(completedCementMixerSpins * state.cementMixers * CEMENT_MIXER_STONES_PER_SPIN);
    playCementMixerSpin();
  }

  const currentSilverfishInterval = silverfishInterval();
  if (
    silverfishLevel() > 0
    && state.silverfishProgressMs >= currentSilverfishInterval
    && !document.querySelector('.silverfish')
  ) {
    state.silverfishProgressMs = 0;
    state.silverfishNextIntervalMs = chooseSilverfishInterval();
    triggerSilverfishAttack(true);
    saveState();
  }

  render();
}


resetProgressButton.addEventListener('click', () => {
  if (!window.confirm(t('resetConfirm'))) return;

  const language = state.language;
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    // If storage is unavailable, resetting the in-memory state is still enough for this session.
  }

  state = createInitialState();
  state.language = language;
  state.lastSaved = Date.now();
  lastTick = Date.now();

  biomeBanner.classList.remove('biome-banner--show');
  biomeBanner.hidden = true;
  document.querySelectorAll('.flying-stone, .silverfish, .silverfish-theft').forEach((element) => element.remove());

  applyTranslations();
  saveState();
  render();
});

applyTranslations();
applyOfflineProgress();
render();
setInterval(tick, 100);
setInterval(saveState, 5000);
window.addEventListener('beforeunload', saveState);
