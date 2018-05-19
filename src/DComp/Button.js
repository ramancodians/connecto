import React from "react"
import classnames from "classnames"
import { Link } from "react-router-dom"

const Button = (props) => (
  <button
    {...props}
    className={classnames(`btn ${props.className || ""}`, {
      success: props.success,
      failed:props.failed,
    })}

  >
    { props.link
      ? <Link to={props.link}>{props.children}</Link>
      : props.children
    }
  </button>
)

export default Button
