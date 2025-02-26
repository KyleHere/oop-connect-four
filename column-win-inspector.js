import Column from './column.js';

export default class ColumnWinInspector{
  constructor(column) {
    this.column = column;
  }

  inspect() {
    for (let i = 0; i <= 2; i++) {
      const token1 = this.column.getTokenAt(i)
      const token2 = this.column.getTokenAt(i + 1)
      const token3 = this.column.getTokenAt(i + 3)
      const token4 = this.column.getTokenAt(i + 2)

      if (token1 === token2 && token2 === token3 && token3 === token4) {
        return token1;
      }
    }

    return 0;
  }
}
