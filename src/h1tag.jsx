import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello there! I'm Isaac Machakata and I'm currently learning some React basics.",
    };
  }
  render() {
    return (
      <h1>Hello there! I'm {this.props.names} and I'm currently learning some React basics.</h1>
    );
  }
}
export default Hello;
