import React, { Component } from "react"
import classnames from "classnames"

class Token extends Component {

  state = {
    isDragActive: false,
    touchLocation: {},
  }

  handleTouchStart = (event) => {
    const { getPossibleDropLocation, xCoords, yCoords } = this.props
    getPossibleDropLocation({xCoords, yCoords})
  }

  handleTouchEnd = () => {
    const { removeAvailableMoves } = this.props
    removeAvailableMoves();
    this.setState({
      isDragActive: false,
    })
  }

  handleToucMove = (event) => {
    const { availablePos, storeAvailablePos } = this.props
    event.persist()
    const touch = event.changedTouches[0] || {}
    const availablePosEle = Array.from(document.querySelectorAll(".isAvail"))
    const nodePos = availablePosEle.map((node, index) => JSON.parse(JSON.stringify(node.getBoundingClientRect())))
    if(!availablePos){
      storeAvailablePos(nodePos)
    }
    const { clientX, clientY } = touch
    this.setState({
      isDragActive: true,
      touchLocation: {
        clientX,
        clientY,
      }
    })
  }


  render(){
    const { player, isAvailable, availablePos } = this.props
    const { isDragActive, touchLocation: { clientX, clientY } } = this.state
    const styles = isDragActive ? { top: `${+clientY - 25}px`, left: `${+clientX - 25}px`} : {}
    return (
      <div
        draggable
        onTouchStart={this.handleTouchStart}
        onTouchCancel={this.handleTouch}
        onTouchEnd={this.handleTouchEnd}
        onTouchMove={this.handleToucMove}
        style={styles}
        className={classnames("token",
          { pl1: player === "p1",
            pl2: player === "p2",
            active: isDragActive,
          })}
      >
        {player}
      </div>
    )
  }
}

export default Token
