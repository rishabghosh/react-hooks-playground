import React from "react"

const INITIAL_COUNTING_VALUE = 0;

class OldCounter extends React.Component {
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

  export default OldCounter;