import { useEffect, useRef } from "react";

export default function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
 
}

import "./styles.css";
import { useState } from 'react';
import usePrevious from "./usePrevious";

export default function Counter() {
  // const previousCount = usePrevious();
  const [currMonth, setCurrMonth] = useState(0);
  const increment = () => setCurrMonth((prev) => prev + 1);
  const decrement = () => setCurrMonth((prev) => prev - 1); const reset = () => setCurrMonth(0);
  const previousCount = usePrevious(currMonth);

  return (
    <div className="App">
      <h2>Current Count: {currMonth}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
