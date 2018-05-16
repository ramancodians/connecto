import React, { Component } from "react"
import Table from "./Table"
import TokensHolder from "./TokensHolder"
import { getPossibleDropLocation, moveToken, isWon, placeAToken } from "./../helpers"
import SlideSoundMP3 from "./../media/slide_sound.mp3"

const SLIDESOUND = new Audio(SlideSoundMP3)

class Board extends Component {
  state = {
    board: [
      ["e","e","e"],
      ["e","e","e"],
      ["e","e","e"],
    ],
    availableMovesBoard: null,
    p1: 3,
    p2: 3,
    turn: "p1",
  }

  media = {
    SLIDE: new Audio("./media/slide_sound.mp3")
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
    const { board, turn } = this.state
    const newBoard = moveToken(currentPos, nextPos, board)
    const won = isWon([...newBoard])
    if (won === "p2" || won === "p1") {
      this.setState({
        board: newBoard,
        turn: this.toggleTurn(turn),
        isWon: won,
      })
    } else {
      this.setState({
        board: newBoard,
        turn: this.toggleTurn(turn),
        isWon: false,
      })
    }
  }

  toggleTurn = () => {
    const { turn } = this.state
    if(turn === "p1") {
      return "p2"
    } else if(turn === "p2") {
      return "p1"
    } else {
      return "e"
    }
  }

  handlePlaceAToken = (coords, turn) => {
    const { board, p1, p2 } = this.state
    SLIDESOUND.play()
    if(p1 > 0 || p2 > 0){
      const newBoard = placeAToken(coords, turn, board)
      const won = isWon([...newBoard])
      const newP1 = turn === "p1" ? p1 - 1 : p1
      const newP2 = turn === "p2" ? p2 - 1 : p2
      if (won === "p2" || won === "p1") {
        this.setState({
          board: newBoard,
          turn: this.toggleTurn(turn),
          p1: newP1,
          p2: newP2,
          isWon: won,
        })
      } else {
        this.setState({
          board: newBoard,
          turn: this.toggleTurn(turn),
          p1: newP1,
          p2: newP2,
          isWon: false,
        })
      }
    }
  }

  render(){
    const { board, availableMovesBoard, availablePos, isWon, turn, p1, p2 } = this.state
    const tokens = turn === "p1" ? p1 : p2
    return (
      <div
        className="board-wrap"
      >
        { !isWon &&
          <div>
            <TokensHolder tokens={p1} turn="p1" activeTurn={turn}/>
            <Table
              turn={turn}
              board={board}
              availableMovesBoard={availableMovesBoard}
              getPossibleDropLocation={this.handleGetPossibleDropLocation}
              removeAvailableMoves={this.removeAvailableMoves}
              storeAvailablePos={this.storeAvailablePos}
              availablePos={availablePos}
              moveToken={this.handleMoveToken}
              placeAToken={this.handlePlaceAToken}
            />
            <TokensHolder tokens={p2} turn="p2" activeTurn={turn}/>
          </div>
        }

        { isWon && <h1> Player {isWon} Won!! </h1>  }
      </div>
    )
  }
}

export default Board
