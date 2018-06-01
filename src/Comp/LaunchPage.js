import React from "react"
import LaunchImg from "./../media/launch.gif"
import Button from "./../DComp/Button"

const LaunchPage = () => (
  <div className="launch-page">
    <h1>Connecto</h1>
    <h5>It's like playing chess and tic-tac-toe!</h5>
    <img src={LaunchImg} alt="Connecto" />
    <Button success link="/token-selection" id="play-button">
      Play
    </Button>
  </div>
)

export default LaunchPage
