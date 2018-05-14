import React from "react"
import Row from "./Row"

const Table = (props) => (
  <div className="board-table">
    {props.board.map((row, yCoords) => <Row
      cells={row}
      yCoords={yCoords}
      key={yCoords}
      {...props}
    />)}
  </div>
)

export default Table
