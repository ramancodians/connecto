import React, { Component } from "react"
import Table from "./Table"
import { getPossibleDropLocation } from "./../helpers"


class Board extends Component {
  state = {
    board: [
      ["e","e","e"],
      ["p1","p2","p1"],
      ["p2","p1","p2"],
    ],
    availableMovesBoard: null,
  }

  handleTouch = (event) => {
    const { target } = event
    console.log(target);
  }

  handleGetPossibleDropLocation = (cell) => {
    const { board } = this.state
    const availableMovesBoard = getPossibleDropLocation(cell,board)
    this.setState({
      availableMovesBoard,
    })
  }

  removeAvailableMoves = () => {
    this.setState({
      availableMovesBoard: null
    })
  }

  storeAvailablePos = (pos) => {
    const { availablePos } = this.state
    if(!availablePos ){
      this.setState({
        availablePos,
      })
    }
  }

  render(){
    const { board, availableMovesBoard, availablePos } = this.state
    console.log(availablePos);
    return (
      <div
        className="board-wrap"
      >
        <Table
          board={board}
          availableMovesBoard={availableMovesBoard}
          getPossibleDropLocation={this.handleGetPossibleDropLocation}
          removeAvailableMoves={this.removeAvailableMoves}
          storeAvailablePos={this.storeAvailablePos}
          availablePos={availablePos}
        />
      </div>
    )
  }
}

export default Board
