const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlay = document.getElementById("config-overlay");
const backdrop = document.getElementById("backdrop");
const form = document.querySelector("form");
const formError = document.getElementById("config-error");
const gameAreaElement = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1Btn = document.getElementById("edit-player-1-btn");
const editPlayer2Btn = document.getElementById("edit-player-2-btn");
const cancelBtn = document.getElementById("cancel-btn");
const startGameBtn = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
cancelBtn.addEventListener("click", closePlayerConfig);
backdrop.addEventListener("click", closePlayerConfig);

editPlayer1Btn.addEventListener("click", openPlayerConfig);
editPlayer2Btn.addEventListener("click", openPlayerConfig);

form.addEventListener("submit", savePlayerConfig);

startGameBtn.addEventListener("click", startNewGame);

for (let gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
