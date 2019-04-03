import React, { useState, useEffect } from "react";

const INITIAL_COUNTING_VALUE = 0;
const COLOURS = { green: "green", red: "red" };

const NewCounter = function() {
  /** 
   *  calling useState with a value will return a array
   *  first element is the current value of the state
   *  and second element is a function to change or set the value
   */
  const [count, setCount] = useState(INITIAL_COUNTING_VALUE);
  const [color, setColor] = useState(COLOURS.green);

  /** the states to watch is put in watch list */
  const watchList = [count];

  /** similar to ComponentDidMount method */
  const setUp = function(count, color) {
    console.log(`current value of color: ${color}, count: ${count}`);
  };

  /** similarTo ComponentWillUnMount method*/
  const tearDown = function(count, color) {
    console.log(`previous value of color: ${color}, count: ${count}`);
  };

  /** to run the setUp and tearDown */
  const runOnChange = function() {
    setUp(count, color);
    return () => tearDown(count, color);
  };

  /** 
   *  @arg1 takes a callback function
   *  the callback function invokes setUp function
   *  and it can also return a function which will invoke the tearDown function
   *  tearing down process in optional
   *  @setUp it can track the current value of states
   *  @tearDown it can track the previous value of states
   *
   *  @arg2 (optional parameter) takes the list of states
   *  if any of the state changes in the list
   *  it re-renders(similar to ComponentDidUpdate) the component
   *  if arg2 is not passed react will take all the staes
   *  if a empty list is passed in arg2
   *  then component will not update for change of any state
   */
  useEffect(runOnChange, watchList);

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
      {console.log("component has been rendered")}
      <div style={{ color }}>{count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleChangeColor}>Change Color</button>
    </main>
  );
};

export default NewCounter;
