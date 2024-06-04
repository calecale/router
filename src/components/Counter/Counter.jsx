import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increaseCounter = () => {
    setCounterValue(counterValue + 1);
  };

  const decreaseCounter = () => {
    setCounterValue(counterValue - 1);
  };

  return (
    <div className="counter-wrapper">
      <button onClick={increaseCounter}>+</button>
      <span>{counterValue}</span>
      <button onClick={decreaseCounter}>-</button>
    </div>
  );
};

export default Counter;
