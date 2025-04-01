import React, { useState } from "react";

// Use Hooks->useState
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((nextCount) => nextCount + 1);
  };

  return (
    <div>
      <h1>Simple Counter</h1>
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
