import React from "react"
import LaunchImg from "./../media/launch.gif"
import Button from "./../DComp/Button"

const LaunchPage = () => (
  <div className="launch-page">
    <img src={LaunchImg} alt="Connecto" />
    <Button success link="/game">Play</Button>
  </div>
)

export default LaunchPage
