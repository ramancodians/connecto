import React from "react"
import classnames from "classnames"
import Timer from "./../DComp/Timer"

class TokensHolder extends React.Component {
  state = {}
  TIMER = null
  TOTAL_TIME = 10

  componentDidMount() {
    if (!this.TIMER) {
      this.startTimer()
    }
  }

  componentWillReceiveProps(newProps) {
    const { activeTurn: oldActiveTurn } = this.props
    const { activeTurn: newActiveTurn } = newProps
    if ( oldActiveTurn !== newActiveTurn ) {
      console.log("refresh");
      this.startTimer();
    }
  }

  startTimer = () => {
    const { activeTurn, setWinner, shakeTheBoard, isShake } = this.props
    this.endTimer();
    this.TIMER = setInterval(() => {
      let newTimeLeft;
      if (this.state.timeLeft === 0){
        const winner = activeTurn === "p1" ? "p2" : "p1"
        setWinner(winner)
      }else if (!this.state.timeLeft) {
        newTimeLeft = this.TOTAL_TIME
      } else {
        if (this.state.timeLeft < 5){
          shakeTheBoard(true);
        }else{
          shakeTheBoard(false)
        }
        newTimeLeft = this.state.timeLeft - 1
      }
      this.setState({
        timeLeft: newTimeLeft,
      })
    }, 1000)
  }

  componentWillUnmount() {
    this.endTimer();
  }

  endTimer = (callback) => {
    clearInterval(this.TIMER)
    this.setState({
      timeLeft: null,
    })
  }

  render(){
    const { tokens, turn, activeTurn, top, bottom, lalaJee, image, isWon } = this.props
    const avalToken = new Array(tokens).fill(1)
    const { timeLeft } = this.state
    return (
      <div
        className={classnames("token-holder", {
          activeTurn: activeTurn === turn,
          top: top,
          bottom: bottom,
          empty: avalToken.length === 0,
        })}
        onClick={ () => {
          if ( lalaJee ) { lalaJee(); }
        }}
      >
        {avalToken.map((token, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={classnames("token",{
              pl1: turn === "p1",
              pl2: turn === "p2",
              hide: isWon,
            })}
          >
          </div>
        ))}
        { activeTurn === turn && <Timer timeLeft={timeLeft} /> }
      </div>
    )
  }
}

export default TokensHolder
