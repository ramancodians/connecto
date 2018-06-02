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
    turn,
    placeAToken,
    player1Image,
    player2Image,
    isWon,
  } = props
  const isAvailable = availableMovesBoard && availableMovesBoard[yCoords][xCoords]
  return (
    <div
      className={classnames("cell", {
        isAvail: isAvailable,
      })}
      data-xcoords={xCoords}
      data-ycoords={yCoords}
      onClick={() => {
        if(text === "e") { placeAToken({xCoords, yCoords}, turn)}
      }}
    >
      { text !== "e" &&
        <Token
          turn={turn}
          player={text}
          xCoords={xCoords}
          yCoords={yCoords}
          isAvailable={isAvailable}
          getPossibleDropLocation={getPossibleDropLocation}
          removeAvailableMoves={removeAvailableMoves}
          storeAvailablePos={storeAvailablePos}
          availablePos={availablePos}
          moveToken={moveToken}
          isWon={isWon}
          image={ text === "p1" ? player1Image : player2Image }
        />
      }
    </div>
  )
}

export default Cell
