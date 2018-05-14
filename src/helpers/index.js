export function getPossibleDropLocation(coords, board) {
  const { xCoords, yCoords } = coords
  const possibleMoves = [
    getItemFromBoard(xCoords - 1 ,yCoords, board), // Left
    getItemFromBoard(xCoords - 1 ,yCoords - 1, board), // TopLeft
    getItemFromBoard(xCoords,yCoords - 1, board), // Top
    getItemFromBoard(xCoords + 1 ,yCoords - 1, board), // TopRight
    getItemFromBoard(xCoords + 1 ,yCoords, board), // Right
    getItemFromBoard(xCoords + 1 ,yCoords + 1, board), // BottomRight
    getItemFromBoard(xCoords ,yCoords + 1, board), // Bottom
    getItemFromBoard(xCoords - 1 ,yCoords + 1, board), // BottomLeft
  ].filter(val => val !== undefined)
  let newBoard = []
  board.map((cells, y) => {
    newBoard[y] = []
    cells.map((cell, x) => {
      if(possibleMoves.filter((val) => val.x === x && val.y === y).length === 1){
        newBoard[y][x] = 1
      }else{
        newBoard[y][x] = 0
      }
    })
  })
  return newBoard
}

function getItemFromBoard(x, y, board){
  const valueAtCoords = board[y] && board[y][x]
  if (valueAtCoords === "e" ) {
    return {x,y}
  }
}
