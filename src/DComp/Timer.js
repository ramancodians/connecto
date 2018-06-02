import React from "react"
import TimerIcon from "./../media/timer-icon.svg"

class Timer extends React.Component {

  state = {}
  render() {
    const { timeLeft } = this.props
    return (
      <div className="timer">
        <img src={TimerIcon} alt="timer icon"/>
        {timeLeft || ".."} secs
      </div>
    )
  }
}

export default Timer
