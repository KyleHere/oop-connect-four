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

  for (let row = 0; row <= 5; row++) {
    for (let col = 0; col <= 6; col++) {
      const currentSpace = document.querySelector(`#square-${row}-${col}`)
      currentSpace.innerHTML = '';
      const div = document.createElement('div');
      if (game.getTokenAt(row, col) === 1) {
        div.classList.add('token');
        div.classList.add('black');
        currentSpace.append(div);
      } else if (game.getTokenAt(row, col) === 2) {
        div.classList.add('token');
        div.classList.add('red');
        currentSpace.append(div);
      }
    }
  }
  for(let i = 0; i <= 6; i++){
    const columnId = document.getElementById(`column-${i}`);
    if(game.checkColumnFull(i)){
      columnId.classList.add('full');
    }
    else if(!game.checkColumnFull(i)){
      columnId.classList.remove('full');
    }
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

  targets.addEventListener('click', event => {
    if (!event.target.id.startsWith('column')) {
      return;
    }
    let columnId = Number(event.target.id[event.target.id.length - 1])
    game.playInColumn(columnId);
    updateUI();
  })
});
