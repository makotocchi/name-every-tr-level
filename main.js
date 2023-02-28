"use strict";

class Game {
    constructor(gameName, levelNames) {
        this.gameName = gameName;
        this.levels = levelNames.map(x => new Level(x));
    }
}

class Level {
    constructor(levelName) {
        this.levelName = levelName;
        this.relaxedLevelName = relaxLevelName(levelName);
    }
}

// Globals
const games = [
    new Game("Tomb Raider", [
        "Caves",
        "City of Vilcabamba",
        "The Lost Valley",
        "Tomb of Qualopec",
        "St. Francis' Folly",
        "Colosseum",
        "Palace Midas",
        "The Cistern",
        "Tomb of Tihocan",
        "City of Khamoon",
        "Obelisk of Khamoon",
        "Sanctuary of the Scion",
        "Natla's Mines",
        "Atlantis",
        "The Great Pyramid",
        "Lara's Home"
    ]),

    new Game("Tomb Raider II", [
        "The Great Wall",
        "Venice",
        "Bartoli's Hideout",
        "Opera House",
        "Offshore Rig",
        "Diving Area",
        "40 Fathoms",
        "Wreck of the Maria Doria",
        "Living Quarters",
        "The Deck",
        "Tibetan Foothils",
        "Barkhang Monastery",
        "Catacombs of the Talion",
        "Ice Palace",
        "Temple of Xian",
        "Floating Islands",
        "Dragon's Lair",
        "Home Sweet Home",
        "Lara's Home"
    ]),

    new Game("Tomb Raider III: Adventures of Lara Croft", [
        "Jungle",
        "Temple Ruins",
        "The River Ganges",
        "Caves of Kaliya",
        "Nevada Desert",
        "High Security Compound",
        "Area 51",
        "Coastal Village",
        "Crash Site",
        "Madubu Gorge",
        "Temple of Puna",
        "Thames Wharf",
        "Aldwych",
        "Lud's Gate",
        "City",
        "Antarctica",
        "RX-Tech Mines",
        "Lost City of Tinnos",
        "Meteorite Cavern",
        "All Hallows",
        "Lara's Home"
    ]),

    new Game("Tomb Raider: Unfinished Business", [
        "Return to Egypt",
        "Temple of the Cat",
        "Atlantean Stronghold",
        "The Hive"
    ]),

    new Game("Tomb Raider II: Golden Mask", [
        "The Cold War",
        "Fool's Gold",
        "Furnace of the Gods",
        "Kingdom",
        "Nightmare in Vegas"
    ]),

    new Game("Tomb Raider: The Lost Artifact", [
        "Highland Fling",
        "Willard's Lair",
        "Shakespeare Cliff",
        "Sleeping with the Fishes",
        "It's a Madhouse!",
        "Reunion"
    ]),

    new Game("Tomb Raider: The Last Revelation", [
        "Angkor Wat",
        "Race for the Iris",
        "The Tomb of Seth",
        "Burial Chambers",
        "Valley of the Kings",
        "KV5",
        "Temple of Karnak",
        "Great Hypostyle Hall",
        "Sacred Lake",
        "Tomb of Semerkhet",
        "Guardian of Semerkhet",
        "Desert Railroad",
        "Alexandria",
        "Coastal Ruins",
        "Catacombs",
        "Temple of Poseidon",
        "The Lost Library",
        "Hall of Demetrius",
        "Pharos, Temple of Isis",
        "Cleopatra's Palaces",
        "City of the Dead",
        "Chambers of Tulun",
        "Citadel Gate",
        "Trenches",
        "Street Bazaar",
        "Citadel",
        "Sphinx Complex",
        "Underneath the Sphinx",
        "Menkaure's Pyramid",
        "Inside Menkaure's Pyramid",
        "The Mastabas",
        "The Great Pyramid",
        "Khufu's Queen's Pyramid",
        "Inside the Great Pyramid",
        "Temple of Horus"
    ]),

    new Game("Tomb Raider Chronicles", [
        "Streets of Rome",
        "Trajan's Markets",
        "The Colosseum",
        "The Base",
        "The Submarine",
        "Deepsea Dive",
        "Sinking Submarine",
        "Gallows Tree",
        "The Labyrinth",
        "Old Mill",
        "The 13th Floor",
        "Escape with the Iris",
        "Red Alert!"
    ]),

    new Game("Tomb Raider: The Angel of Darkness", [
        "Parisian Back Streets",
        "Derelict Apartment Block",
        "Industrial Roof Tops",
        "Margot Carvier's Apartment",
        "Louvre Storm Drains",
        "Louvre Galleries",
        "The Archaeological Dig",
        "Tomb Of Ancients",
        "Neptune's Hall",
        "Wrath Of The Beast",
        "The Sanctuary Of Flame",
        "The Breath Of Hades",
        "The Hall Of Seasons",
        "Galleries Under Siege",
        "Von Croy's Apartment",
        "The Monstrum Crimescene",
        "The Strahov Fortress",
        "Bio-research Facility",
        "The Sanitarium",
        "Maximum Containment Area",
        "Aquatic Research Area",
        "The Vault of Trophies",
        "Boaz Returns",
        "The Lost Domain",
        "Eckhardt's Lab"
    ]),

    new Game("Tomb Raider: Legend", [
        "Bolivia",
        "Peru",
        "Japan",
        "Ghana",
        "Kazakhstan",
        "England",
        "Nepal",
        "Bolivia Redux"
    ]),

    new Game("Tomb Raider: Anniversary", [
        "Mountain Caves",
        "City of Vilcabamba",
        "The Lost Valley",
        "Tomb of Qualopec",
        "St. Francis' Folly",
        "The Coliseum",
        "Midas Palace",
        "Tomb of Tihocan",
        "Temple of Khamoon",
        "Obelisk of Khamoon",
        "Sanctuary of the Scion",
        "Natla's Mines",
        "The Great Pyramid",
        "Final Conflict",
        "Croft Manor"
    ]),

    new Game("Tomb Raider: Underworld", [
        "No Illusions",
        "The Path to Avalon",
        "Niflheim",
        "The Norse Connection",
        "God of Thunder",
        "Realm of the Dead",
        "Remnants",
        "Bhogavati",
        "The Ancient World",
        "Puppet No Longer",
        "Protected by the Dead",
        "The Unnamed Days",
        "Xibalba",
        "The Midgard Serpent",
        "Land of the Dead",
        "Gate of the Dead",
        "Valhalla",
        "Rituals Old",
        "Helheim",
        "Yggdrasil",
        "Out of Time"
    ])
];
const levels = games.map(x => x.levels).reduce((a, b) => a.concat(b), []);
const levelNames = levels.map(x => x.levelName);
const relaxedLevelNames = levels.map(x => x.relaxedLevelName);
const namedLevels = new Set();
let counter = 0;
initializePage();

function initializePage() {
    const gameList = document.getElementById("gameList");
    for (const game of games) {

        const gameDiv = document.createElement("div");
        gameDiv.className = "col text-center";

        const gameTitle = document.createElement("h3");
        gameTitle.innerHTML = game.gameName;
        gameDiv.appendChild(gameTitle);

        const levelList = document.createElement("ul");
        levelList.className = "list-unstyled";
        gameDiv.appendChild(levelList);

        for (const level of game.levels) {
            const levelListItem = document.createElement("li");
            levelListItem.className = "levelName";
            levelListItem.innerHTML = "???";
            levelListItem.setAttribute("data-level-name", level.relaxedLevelName);

            levelList.appendChild(levelListItem);
        }

        gameList.appendChild(gameDiv);
    }

    const startModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("startModal"));
    startModal.show();

    updateCounterText();
}

function startGame() {
    const startModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("startModal"));
    startModal.hide();

    const levelNameInput = document.getElementById("levelNameInput");
    levelNameInput.value = "";
    levelNameInput.focus();

    const minutes = 10; // change this to affect how much time the game lasts
    const timeStarted = new Date().getTime();
    const targetTime = new Date(timeStarted + (minutes * 60 * 1000 + 1000)).getTime(); // 10 minutes later

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = targetTime - now;

        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        if (timeRemaining < 1000) {
            document.getElementById("timer").innerHTML = "0:00";
            clearInterval(interval);
            endGame();
        } else {
            document.getElementById("timer").innerHTML = minutes + ":" + String(seconds).padStart(2, '0');
        }
    }, 1000);
}

function endGame() {
    const endMessage = document.getElementById("endMessage");

    if (counter === 0) {
        endMessage.innerHTML = "Wow. You couldn't name even one?";
    } else if (counter <= 10) {
        endMessage.innerHTML = `You either have to play more TR games or type faster. You named ${counter} out of ${levelNames.length} levels.`;
    } else if (counter <= 80) {
        endMessage.innerHTML = `Not bad. You managed to name ${counter} out of ${levelNames.length} levels!`;
    } else {
        endMessage.innerHTML = `Congratulations! You managed to name ${counter} out of ${levelNames.length} levels!`;
    }

    const endModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("endModal"));
    endModal.show();

    for (let i = 0; i < relaxedLevelNames.length; i++) {
        const relaxedLevelName = relaxedLevelNames[i];
        const levelListItems = document.querySelectorAll(`[data-level-name="${relaxedLevelName}"]`);

        for (const levelListItem of levelListItems) {
            if (levelListItem.innerHTML === "???") {
                levelListItem.classList.add("text-danger");
                levelListItem.innerHTML = levelNames[i];
            } else {
                levelListItem.classList.add("text-success");
            }
        }
    }
}

function restartGame() {
    const restartDiv = document.getElementById("restartDiv");
    restartDiv.className = "d-none";

    const inputDiv = document.getElementById("inputDiv");
    inputDiv.className = "";

    counter = 0;
    resetLevelNames();

    document.getElementById("timer").innerHTML = "10:00";
    updateCounterText();

    const endModal = bootstrap.Modal.getOrCreateInstance(document.getElementById("endModal"));
    endModal.hide();

    setWarning("");

    startGame();
}

function checkLevelName(key = "Enter") {
    if (key !== "Enter") {
        return;
    }

    const levelNameInput = document.getElementById("levelNameInput");
    const relaxedLevelName = relaxLevelName(levelNameInput.value.trim());

    if (namedLevels.has(relaxedLevelName)) {
        setWarning("Level already on the list.");
        return;
    }

    const levelNameIndex = relaxedLevelNames.indexOf(relaxedLevelName);
    if (levelNameIndex !== -1) {
        const levelListItems = document.querySelectorAll(`[data-level-name="${relaxedLevelName}"]`);

        for (const levelListItem of levelListItems) {
            levelListItem.innerHTML = levelNames[levelNameIndex];
        }

        namedLevels.add(relaxedLevelName);
        counter += levelListItems.length;
        updateCounterText();

        levelNameInput.focus();
        levelNameInput.value = "";
        setWarning("");
    } else {
        setWarning("Level doesn't exist.");
    }
}

function updateCounterText() {
    document.getElementById("counter").innerHTML = counter + "/" + levelNames.length;
}

function relaxLevelName(levelName) {
    return levelName.replace(/[^a-zA-Z0-9 ]/g, "").toLowerCase();
}

function setWarning(message) {
    document.getElementById("warning-text").innerHTML = message;
}

function resetLevelNames() {
    namedLevels.clear();
    const levelListItems = document.getElementsByClassName("levelName");

    for (const levelNameItem of levelListItems) {
        levelNameItem.innerHTML = "???";
        levelNameItem.className = "levelName";
    }
}

function checkNames() {
    const restartDiv = document.getElementById("restartDiv");
    restartDiv.className = "";

    const inputDiv = document.getElementById("inputDiv");
    inputDiv.className = "d-none";
}