import React from "react"
import classnames from "classnames";
import Token from "./Token"

const Cell = (props) => {
  const {
    xCoords,
    yCoords,
    availableMovesBoard,
    getPossibleDropLocation,
    text,
    removeAvailableMoves,
    storeAvailablePos,
    availablePos,
    moveToken,
  } = props
  const isAvailable = availableMovesBoard && availableMovesBoard[yCoords][xCoords]
  return (
    <div
      className={classnames("cell", {
        isAvail: isAvailable,
      })}
      data-xcoords={xCoords}
      data-ycoords={yCoords}
    >
      { text !== "e" &&
        <Token
          player={text}
          xCoords={xCoords}
          yCoords={yCoords}
          isAvailable={isAvailable}
          getPossibleDropLocation={getPossibleDropLocation}
          removeAvailableMoves={removeAvailableMoves}
          storeAvailablePos={storeAvailablePos}
          availablePos={availablePos}
          moveToken={moveToken}
        />
      }
    </div>
  )
}

export default Cell
