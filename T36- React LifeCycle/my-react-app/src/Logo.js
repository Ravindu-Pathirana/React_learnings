import { Component } from "react";
import logo from "./logo.svg";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillUnmount() {
    console.log("Logo Component Unmounted");
    alert("Logo Component is being removed from the DOM");
  }

  componentWillMount() {
    console.log("Logo Component Will Mount");
    alert("Logo Component is about to mount");
  }

  render() {
    return (
      <>
        <img
          src={logo}
          className="App-logo"
          alt="logo-2"
          style={{ animationDuration: `${this.props.speed}s` }}
        />
      </>
    );
  }
}
export default Logo;
