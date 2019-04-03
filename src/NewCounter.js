import React, { useState } from "react";

const INITIAL_COUNTING_VALUE = 0;
const COLOURS = { green: "green", red: "red" };
// const INITIAL_COLOR = COLOURS.green;

const NewCounter = function() {
  //calling useState with a value will return a array
  //one element is the current value and other is a function to change the value
  const [count, setCount] = useState(INITIAL_COUNTING_VALUE);
  const [color, setColor] = useState(COLOURS.green);

  

  const handleDecrement = function() {
    if (count > INITIAL_COUNTING_VALUE) setCount(count - 1);
  };

  const handleIncrement = () => setCount(count + 1);
  const handleReset = () => setCount(INITIAL_COUNTING_VALUE);
  const handleChangeColor = function() {
    color === COLOURS.green ? setColor(COLOURS.red) : setColor(COLOURS.green);
  };

  return (
    <main>
      <div style={{color}}>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleChangeColor}>Change Color</button>
    </main>
  );
};

export default NewCounter;
