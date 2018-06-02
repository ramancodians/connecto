import React from "react"
import classnames from "classnames"
import Row from "./Row"

const Table = (props) => (
  <div className={classnames("board-table", {
    "shake-the-board": props.isShake,
    isWon: props.isWon,
  })}>
    {props.board.map((row, yCoords) => <Row
      cells={row}
      yCoords={yCoords}
      key={yCoords}
      {...props}
    />)}
  </div>
)

export default Table
