export default class Game {
  constructor(playerOneName, playerTwoName, currentPlayer) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.currentPlayer = 1;
    this.columns = []
  }

  getName() {
    return `${this.playerOneName} vs ${this.playerTwoName}`;
  }

  playInColumn(){
    if(this.currentPlayer === 1){
      this.currentPlayer = 2;
    }
    else{
      this.currentPlayer = 1;
    }
  }
}
