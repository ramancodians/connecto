import React, { Component } from "react"
import Table from "./Table"
import { getPossibleDropLocation, moveToken } from "./../helpers"


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
    this.setState({
      availablePos: pos,
    })
  }

  handleMoveToken = (currentPos, nextPos) => {
    const { board } = this.state
    const newBoard = moveToken(currentPos, nextPos, board)
    this.setState({
      board: newBoard,
    })
  }

  render(){
    const { board, availableMovesBoard, availablePos } = this.state
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
          moveToken={this.handleMoveToken}
        />
      </div>
    )
  }
}

export default Board
