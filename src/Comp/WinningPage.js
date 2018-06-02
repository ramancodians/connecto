import React from "react"
import Button from "./../DComp/Button"
import WinnerGif from "./../media/winner.gif"

const WinningPage = (props) => {
  const { isWon } = props
  return (
    <div className="winning-page">
      <img src={WinnerGif} alt="Winner"/>
      <h1>Player {isWon === "p1" ? "1" : "2"}  Won!</h1>
      <Button success link="/game">Play Again</Button>
      <Button link="/">Back to Home Page</Button>
    </div>
  )
}

export default WinningPage
