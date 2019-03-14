import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">
            Navbar{" "}
            <span className="badge badge-secondary ml-2">
              {this.props.total}
            </span>
          </span>
        </nav>
      </div>
    );
  }
}

export default Navbar;
