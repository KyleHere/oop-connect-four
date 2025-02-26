export default class DiagonalWinInspector{
  constructor(columns){
    this.columns = columns;
  }

  inspect(){
    console.log(this.columns)
    for(let rowIndex = 0; rowIndex < 3; rowIndex++){
      let token1 = this.columns[0].getTokenAt(rowIndex)
      let token2 = this.columns[1].getTokenAt(rowIndex + 1)
      let token3 = this.columns[2].getTokenAt(rowIndex + 2)
      let token4 = this.columns[3].getTokenAt(rowIndex + 3)

      if(token1 === token2 && token2 === token3 && token3 === token4 && token1 !== undefined ){
        return token1;
      }

      token1 = this.columns[0].getTokenAt(rowIndex + 3)
      token2 = this.columns[1].getTokenAt(rowIndex + 2)
      token3 = this.columns[2].getTokenAt(rowIndex + 1)
      token4 = this.columns[3].getTokenAt(rowIndex)

      if(token1 === token2 && token2 === token3 && token3 === token4 && token1 !== undefined ){
        return token1;
      }
    }
    return 0;
  }
}
