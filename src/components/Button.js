import React from "react";
import "../App.css";

class ButtonContainer extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} style={{ width: 50, height: 25 }}>
        {this.props.text}
      </button>
    );
  }
}

export default ButtonContainer;
