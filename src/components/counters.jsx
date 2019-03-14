import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = (action = null, counter = null) => {
    if (action === "all") {
      const counters = this.state.counters.map(counter => {
        counter.value = 0;
        return counter;
      });
      this.setState({ counters });
    } else {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value = 0;
      this.setState({ counters });
    }
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value += 1;
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {/* Reset Button */}
        <button
          className="btn btn-primary mb-2"
          onClick={() => this.handleReset("all")}
        >
          Reset
        </button>
        <span class="badge badge-secondary ml-2">
          total {this.state.counters.filter(c => c.value > 0).length}
        </span>
        {/* Reset Button */}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
