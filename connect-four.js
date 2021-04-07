import Game from './game.js';
let game = undefined;

function updateUI() {
  const boardHolder = document.getElementById('board-holder');
  const gameName = document.getElementById('game-name');
  if (game === undefined) {
    boardHolder.classList.add('is-invisible');
  } else {
    boardHolder.classList.remove('is-invisible');
    gameName.innerHTML = game.getName();
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  const playerOneInput = document.getElementById('player-1-name');
  const playerTwoInput = document.getElementById('player-2-name');
  const newGameStatus = document.getElementById('new-game');

  playerOneInput.addEventListener('keyup', (event) => {
    if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
      newGameStatus.disabled = false;
    }
  });

  playerTwoInput.addEventListener('keyup', (event) => {
    if (playerOneInput.value.length > 0 && playerTwoInput.value.length > 0) {
      newGameStatus.disabled = false;
    }
  });

  newGameStatus.addEventListener('click', (event) => {
    game = new Game(playerOneInput.value, playerTwoInput.value);
    playerOneInput.value = '';
    playerTwoInput.value = '';
    newGameStatus.disabled = true;
    updateUI();
  });
});
