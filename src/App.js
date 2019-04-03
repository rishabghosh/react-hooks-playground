import React, { useState } from "react";
import "./App.css";

const INITIAL_COUNTING_VALUE = 0;

const HookBasedCounter = function() {
  //calling useState with a value will return a array
  //one element is the current value and other is a function to change the value
  const [count, setCount] = useState(INITIAL_COUNTING_VALUE);

  const handleDecrement = function() {
    if (count <= 0) return;
    setCount(count - 1);
  };

  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(INITIAL_COUNTING_VALUE);

  return (
    <main>
      <div>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </main>
  );
};

class ClassBasedCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: INITIAL_COUNTING_VALUE };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment() {
    // this.setState({count: this.state.count + 1});
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  decrement() {
    if (this.state.count <= 0) return;
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: INITIAL_COUNTING_VALUE });
  }

  render() {
    return (
      <main>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </main>
    );
  }
}

export { ClassBasedCounter, HookBasedCounter };
