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

  getTokenAt(rowIndex) {
    return this.tokens[5- rowIndex];
  }
}
