import Column from './column.js';
import ColumnWinInspector from './column-win-inspector.js';
import RowWinInspector from './row-win-inspector.js';
import DiagonalWinInspector from './diagonal-win-inspector.js';

export default class Game {
  constructor(playerOneName, playerTwoName, currentPlayer) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
    this.currentPlayer = 1;
    this.columns = [new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column(),
                    new Column()
                  ];
    this.winnerNumber = 0;
  }

  getName() {
    if (this.winnerNumber === 3) {
    return `${this.playerOneName} ties with ${this.playerTwoName}`;
    } else if (this.winnerNumber === 1) {
      return `${this.playerOneName} wins!`;
    } else if (this.winnerNumber === 2) {
      return `${this.playerTwoName} wins!`;
    } else {
      return `${this.playerOneName} vs ${this.playerTwoName}`;
    }
  }

  playInColumn(columnIndex) {
    this.columns[columnIndex].add(this.currentPlayer)
    // console.log(this.columns)
    this.checkForTie();
    this.checkForColumnWin();
    this.checkForRowWin();
    this.checkForDiagonalWin();

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2;
    } else {
      this.currentPlayer = 1;
    }
  }

  getTokenAt(rowIndex, columnIndex) {
    return this.columns[columnIndex].getTokenAt(rowIndex);
  }

  checkColumnFull(columnIndex){
    if (this.winnerNumber === 1 || this.winnerNumber === 2) {
      return true
    }
    return this.columns[columnIndex].checkIsFull();
  }

  checkForTie() {
    if (this.columns.every(column => column.checkIsFull())) {
      this.winnerNumber = 3;
    }
  }

  checkForColumnWin() {
    if (this.winnerNumber !== 0) {
      return;
    }

    this.columns.forEach(column => {
      let columnWinInspector = new ColumnWinInspector(column);
      if (columnWinInspector.inspect() === 1 || columnWinInspector.inspect() === 2) {
        this.winnerNumber = columnWinInspector.inspect()
        return;
      }
    })
  }

  checkForDiagonalWin() {
    if(this.winnerNumber !== 0) return;

    for(let columnIndex = 0; columnIndex < 4; columnIndex++){
      const columns = this.columns.slice(columnIndex, columnIndex + 4);
      const inspector = new DiagonalWinInspector(columns);
      const winnerResult = inspector.inspect();

      // console.log(winnerNumber , " outside")
      if(winnerResult === 1 || winnerResult === 2){
        this.winnerNumber = winnerResult;
        console.log(winnerResult)
        break;
      }
    }
  }

  checkForRowWin(){
    if(this.winnerNumber !== 0) return;

    for(let columnIndex = 0; columnIndex < 4; columnIndex++){
      const columns = this.columns.slice(columnIndex, columnIndex + 4);
      const inspector = new RowWinInspector(columns);
      const winnerResult = inspector.inspect();

      // console.log(winnerNumber , " outside")
      if(winnerResult === 1 || winnerResult === 2){
        this.winnerNumber = winnerResult;
        console.log(winnerResult)
        break;
      }
    }
  }
}
