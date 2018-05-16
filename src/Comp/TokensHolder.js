import React from "react"
import classnames from "classnames"

const TokensHolder = ({ tokens, turn, activeTurn }) => {
  const avalToken = new Array(tokens).fill(1)
  return (
    <div className={classnames("token-holder", { activeTurn: activeTurn === turn })}>
      {avalToken.map((token, index) => (
        <div key={index} className={classnames("token", { pl1: turn === "p1", pl2: turn === "p2" })}>
          {turn}
        </div>
      ))}
    </div>
  )
}

export default TokensHolder
