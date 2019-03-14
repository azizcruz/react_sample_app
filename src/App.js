import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter.jsx";
import Navbar from "./components/navbar";

class App extends Component {
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
      <React.Fragment>
        <Navbar total={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container mt-3">
          {/* Reset Button */}
          <button
            className="btn btn-primary mb-2"
            onClick={() => this.handleReset("all")}
          >
            Reset
          </button>
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
        </main>
      </React.Fragment>
    );
  }
}

export default App;
