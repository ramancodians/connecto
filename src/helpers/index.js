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

export function getCollidingCells(activeCell, availableCells, availablePosEle) {
  for(let i=0; i < availableCells.length; i++){
    const item = availableCells[i]
    const { availableCoords: cell, element  } = item
    if (cell.x < activeCell.x + activeCell.width &&
       cell.x + cell.width > activeCell.x &&
       cell.y < activeCell.y + activeCell.height &&
       cell.height + cell.y > activeCell.y) {
       element.classList.add("hovered")
    }else{
      element.classList.remove("hovered")
    }
  }
}

export const DOMRectToJSON = (domRect) => ({
  x: domRect.x,
  y: domRect.y,
  height: domRect.height,
  width: domRect.width,
  left: domRect.left,
  bottom: domRect.bottom,
  right: domRect.right,
  top: domRect.top,
})

export function moveToken(currentPos, nextPos, board) {
  const {xCoords: currentXCoords, yCoords: currentYCoords } = currentPos
  const {xCoords: nextXCoords, yCoords: nextYCoords } = nextPos
  const dropValue = board[nextYCoords][nextXCoords]
  const currentValue = board[currentYCoords][currentXCoords]
  board[currentYCoords][currentXCoords] = dropValue
  board[nextYCoords][nextXCoords] = currentValue
  return [...board]
}

export function isWon(board){
  let won = false, col = [];
  // check hori
  for(let key in board) {
    if(Array.from(new Set(board[key])).length === 1) {
      won = Array.from(new Set(board[key]))[0];
      break;
    }
  }

  for(let i=0; i < board.length; i++){
    col = []
    for (let j=0; j < board[i].length; j++){
      col.push(board[j][i])
    }
    if( Array.from(new Set(col)).length === 1 && col[0] !== "e") {
      won = Array.from(new Set(col))[0]
      break;
    }
  }

  col = []
  for(let i=0; i< board.length; i++) {
    col.push(board[i][i])
  }
  if(Array.from(new Set(col)).length === 1) {
    won =  Array.from(new Set(col))[0];
  }else {
    col = []
    for(let i=0; i< board.length; i++) {
      col.push(board.reverse()[i][i])
    }
    if(Array.from(new Set(col)).length === 1) {
      won =  Array.from(new Set(col))[0];
    }
  }
  return won
}

export function placeAToken(coords, turn, board) {
  const { xCoords, yCoords } = coords
  board[yCoords][xCoords] = turn
  return [...board]
}

function refreshBoard(){
  let board = []
  for(let i=0; i<3; i++){
    board[i] = []
    for(let j=0; j<3; j++){
      board[i][j] = "e";
    }
  }
  return [...board]
}
