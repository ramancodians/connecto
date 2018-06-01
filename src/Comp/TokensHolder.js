import React from "react"
import classnames from "classnames"

class TokensHolder extends React.Component {

  state = {}
  TIMER = null

  componentDidMount() {
    //console.log("1asa");
    //this.startTimer()
  }

  startTimer = () => {
    let { timeLeft } = this.state
    console.log(this.state);
    this.TIMER = setInterval(() => {
      console.log(timeLeft);
      const newTimeLeft = !timeLeft ? 10 : timeLeft--
      this.setState({
        timeLeft: newTimeLeft,
      })
    }, 1000)
  }

  endTimer = () => {
    clearInterval(this.TIMER)
  }

  render(){
    const { tokens, turn, activeTurn, top, bottom, lalaJee, image } = this.props
    const avalToken = new Array(tokens).fill(1)
    const { timeLeft } = this.state
    return (
      <div
        className={classnames("token-holder", {
          activeTurn: activeTurn === turn,
          top: top,
          bottom: bottom,
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
            })}
          >
          </div>
        ))}
        {timeLeft}
      </div>
    )
  }
}

export default TokensHolder
