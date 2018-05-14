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
