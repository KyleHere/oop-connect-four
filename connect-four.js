import Game from './game.js';
let game = undefined;

function updateUI() {
  const boardHolder = document.getElementById('board-holder');
  const gameName = document.getElementById('game-name');
  const newTargets = document.getElementById('click-targets');
  if (game === undefined) {
    boardHolder.classList.add('is-invisible');
  } else {
    boardHolder.classList.remove('is-invisible');
    gameName.innerHTML = game.getName();
  }


  if(game.currentPlayer === 1){
    newTargets.classList.add('black')
    newTargets.classList.remove('red')
  }
  else{
    newTargets.classList.add('red')
    newTargets.classList.remove('black')
  }
}

window.addEventListener('DOMContentLoaded', (event) => {
  const playerOneInput = document.getElementById('player-1-name');
  const playerTwoInput = document.getElementById('player-2-name');
  const newGameStatus = document.getElementById('new-game');
  const targets = document.getElementById('click-targets')

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

  targets.addEventListener('click', event =>{
    game.playInColumn();
    updateUI();
  })
});
