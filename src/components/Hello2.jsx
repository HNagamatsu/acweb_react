import React from "react";
import { Link } from "react-router-dom";

class Hello2 extends React.Component {
  state = {
    count: 0
  };
  increment = () => this.setState({ count: this.state.count + 1 });
  render() {
    return (
      <div className="container">
        <h1>Hello2</h1>
        <Link to={`/`}>hello</Link>
        <button className="button is-primary" onClick={this.increment}>
          CLICaaaaaaaaKED {this.state.count} TIMES
        </button>
      </div>
    );
  }
}

export default Hello2;
