import Game from './game.js';
let game = undefined;

window.addEventListener("DOMContentLoaded", event =>{
  const playerOneInput = document.getElementById('player-1-name')
  const playerTwoInput = document.getElementById('player-2-name')
  const newGameStatus = document.getElementById('new-game')

  playerOneInput.addEventListener("keyup", event =>{
    if(playerOneInput.value.length > 0 && playerTwoInput.value.length > 0){
    newGameStatus.disabled = false;
    }
  })

  playerTwoInput.addEventListener("keyup", event =>{
    if(playerOneInput.value.length > 0 && playerTwoInput.value.length > 0){
    newGameStatus.disabled = false;
    }
  })


})
