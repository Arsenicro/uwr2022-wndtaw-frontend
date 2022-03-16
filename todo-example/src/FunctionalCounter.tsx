import React, { useState } from "react";

const FunctionalCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
      <p>{count}</p>
    </div>
  );
};

export default FunctionalCounter;
