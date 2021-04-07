export default class Column {
  constructor() {
    // this.tokens = [null, null, null, null, null, null];
    this.tokens = [];
    this.numOfTokens = 0;
  }

  checkIsFull() {
    return this.tokens.length === 6;
  }

  add(playerNumber) {
    if (!this.checkIsFull()) {
      this.tokens.push(playerNumber);
    }
  }

  // add(playerNumber){
  //   for( let index = 5; index >= 0; i--){
  //     if(this.tokens[index] === null){
  //       this.tokens[index] = playerNumber;
  //       this.numOfTokens += 1;
  //       break;
  //     }
  //   }
  // }

  //return this.tokens[5- rowIndex]
  getTokenAt(rowIndex) {
    return this.tokens[rowIndex];
  }
}
