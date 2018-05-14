import React from "react"
import Cell from "./Cell"

const Row = (props) => (
  <div className="row">
    {props.cells.map((cell, xCoords) => <Cell
        key={xCoords}
        text={cell}
        yCoords={props.yCoords}
        xCoords={xCoords}
        {...props}
      />)}
  </div>
)

export default Row
