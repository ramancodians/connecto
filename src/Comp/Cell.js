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
  } = props
  const isAvailable = availableMovesBoard && availableMovesBoard[yCoords][xCoords]
  return (
    <div
      className={classnames("cell", {
        isAvail: isAvailable,
      })}
    >
      { true &&
        <Token
          player={text}
          xCoords={xCoords}
          yCoords={yCoords}
          isAvailable={isAvailable}
          getPossibleDropLocation={getPossibleDropLocation}
          removeAvailableMoves={removeAvailableMoves}
          storeAvailablePos={storeAvailablePos}
          availablePos={availablePos}
        />
      }
    </div>
  )
}

export default Cell
