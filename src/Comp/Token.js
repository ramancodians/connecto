import React, { Component } from "react"
import classnames from "classnames"
import { getCollidingCells, DOMRectToJSON } from "./../helpers"

class Token extends Component {

  state = {
    isDragActive: false,
    touchLocation: {},
  }

  handleTouchStart = (event) => {
    const { getPossibleDropLocation, xCoords, yCoords, turn, player } = this.props
    if(turn === player) {
      getPossibleDropLocation({xCoords, yCoords})
    }
  }

  handleTouchEnd = () => {
    const { removeAvailableMoves, storeAvailablePos, xCoords, yCoords, moveToken } = this.props
    const hoveredEle = document.querySelector(".cell.isAvail.hovered")
    if(hoveredEle) {
      const coords = {
        xCoords: +hoveredEle.getAttribute("data-xcoords"),
        yCoords: +hoveredEle.getAttribute("data-ycoords"),
      }
      moveToken({xCoords, yCoords}, coords)
    }
    removeAvailableMoves();
    storeAvailablePos(null)
    this.setState({
      isDragActive: false,
    })
  }

  handleToucMove = (event) => {
    const { availablePos, storeAvailablePos, turn, player } = this.props
    if (turn === player) {
      event.persist()
      let coords;
      try { coords = event.changedTouches[0] || {}
      } catch(e){ coords = event.target }
      if(!availablePos){
        const availablePosEle = Array.from(document.querySelectorAll(".isAvail"))
        const nodePos = availablePosEle.map((node, index) => ({
          availableCoords: DOMRectToJSON(node.getBoundingClientRect()),
          element: node,
        }))
        const activeCellPos = DOMRectToJSON(event.target.getBoundingClientRect())
        storeAvailablePos(nodePos)
      }else {
        const activeCellPos = DOMRectToJSON(event.target.getBoundingClientRect())
        getCollidingCells(activeCellPos, availablePos)
      }
      const { clientX, clientY } = coords
      this.setState({
        isDragActive: true,
        touchLocation: {
          clientX,
          clientY,
        }
      })
    }
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

        onDragStart={this.handleTouchStart}
        onDragEnd={this.handleTouchEnd}
        onDrag={this.handleToucMove}

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
