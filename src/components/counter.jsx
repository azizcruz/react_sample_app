import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mb-2">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

          {/* Reset Button */}
          <button
            className="btn btn-primary mr-2"
            onClick={() => this.props.onReset(null, this.props.counter)}
          >
            Reset
          </button>
          {/* Reset Button */}

          {/* Increment Button */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm mr-2"
          >
            Increment
          </button>
          {/* Increment Button */}

          {/* Delete Button */}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm mr-2"
          >
            Delete
          </button>
          {/* Delete Button */}
        </div>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let badgeClasses = "badge m-2 badge-";
    return (badgeClasses +=
      this.props.counter.value === 0 ? "warning" : "primary");
  }

  formatCount() {
    const { value } = this.props.counter;
    const x = "Zero";
    return value === 0 ? x : value;
  }
}

export default Counter;
