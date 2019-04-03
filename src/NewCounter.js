import React, { useState } from "react";

const INITIAL_COUNTING_VALUE = 0;

const NewCounter = function() {
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

  export default NewCounter;