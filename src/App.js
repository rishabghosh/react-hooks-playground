import React, { useState } from "react";
import "./App.css";

const INITIAL_COUNTING_VALUE = 0;

const App = function() {
  //calling useState with a value will return a array
  //one element is the current value and other is a function to change the value
  const [state, setState] = useState(INITIAL_COUNTING_VALUE);
  return (
    <main>
      <div>{state}</div>
      <button onClick={() => setState(state + 1)}>Increment</button>
    </main>
  );
};

export default App;
