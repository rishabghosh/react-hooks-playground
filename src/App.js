import React, { useState } from "react";
import "./App.css";

const INITIAL_COUNTING_VALUE = 0;

const App = function() {
  //calling useState with a value will return a array
  //one element is the current value and other is a function to change the value
  const [state, setState] = useState(INITIAL_COUNTING_VALUE);

  const decrementState = function() {
    if (state <= 0) return;
    setState(state - 1);
  };

  return (
    <main>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={decrementState}>Decrement</button>
      <button onClick={()=> setState(INITIAL_COUNTING_VALUE)}>Reset</button>
    </main>
  );
};

export default App;
