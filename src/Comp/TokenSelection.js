import React from "react"
import classnames from "classnames"
import Button from "./../DComp/Button"
import Token from "./Token"
import { AVAILABLE_TOKENS } from "./../consts"

class TokenSelection extends React.Component {
  state = {
    activeSelection: 1,
  }

  changeActiveSelection = (selection, image) => {
    const { activeSelection } = this.state
    const newState = {
      ...this.state,
    }
    newState[`player${activeSelection}`] = selection
    newState[`player${activeSelection}_image`] = image
    newState.activeSelection = activeSelection === 1 ? 2 : 1
    this.setState({
      ...newState,
    })
  }

  componentWillUnmount(){
    console.log("Saving to Store..");
    const { store } = window
    window.store = {
      ...store,
      ...this.state
    }
    console.log("saved ==>", window.store);
  }

  render(){
    const { activeSelection, player1, player2 } = this.state
    const isSameToken = player1 && player2 && player1 === player2
    console.log(this.state);
    return (
      <div className="token-selection">
        <h2 className={classnames({
            p1color: activeSelection === 1,
            p2color: activeSelection === 2,
          })}
        >
          Player {activeSelection} Choose a token.
        </h2>
         <div className="token-container">
         {Object.keys(AVAILABLE_TOKENS).map(key => (
           <div key={key}>
              <h6>Type: {key}</h6>
              <div className="type-wrap">
                {AVAILABLE_TOKENS[key].map(token => (
                  <Token
                    image={token.image}
                    name={token.name}
                    key={token.id}
                    notMoveble
                    selectedByP1={player1 === token.id}
                    selectedByP2={player2 === token.id}
                    onClick={ () => {
                      this.changeActiveSelection(token.id, token.image)
                    }}
                  />
                ))}
              </div>
           </div>
         ))}
         { isSameToken && (
           <p className="error-text">
               Both players can't have same tokens
            </p>
         )}
         </div>
        <Button
          success
          link="/game"
          disable={!player1 || !player2 || isSameToken}
        >
          Start Match
        </Button>
      </div>
    )
  }
}

export default TokenSelection
