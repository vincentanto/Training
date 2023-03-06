import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div class="con">
      <p>Count: {count}</p>
      <button onClick={decrementCount}>
        -
      </button>
      <button onClick={incrementCount}>
        +
      </button>
      
    </div>
  );
}

export default MyComponent;