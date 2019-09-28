import React from "react"
import { Container, Row } from "reactstrap"

export default class extends React.Component {
  handleClick = e => {

  }
  render() {
    const {iclass, value} = this.props
    const style = {
      borderRadius : "4px",
      fontSize: "12px",
      minWidth: "100px",
      textAlign: "center",
      color: "#555",
    }
    return (
      <div onClick={this.handleClick} style={style} onMouseOver={e=>e.target.props.style={backgroundColor:"blue"}}>
        <i class={iclass}/> {value}
      </div>

    )
  }
}

