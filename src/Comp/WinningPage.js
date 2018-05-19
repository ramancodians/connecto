import React from "react"
import Button from "./../DComp/Button"

const WinningPage = (props) => {
  const { isWon } = props.location.state
  return (
    <div className="winning-page">
      {console.log(props)}
      <h1>Player {isWon}  Won!</h1>
      <Button success link="/">Play Again</Button>

    </div>
  )
}

export default WinningPage