import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0); //maintaining state for tracking count
  const [start, setStart] = useState(false); //maintaining state to track the start and stop
  const timerId = useRef(); //to keep the reference of timer id

  useEffect(() => {
    if (start) {
      timerId.current = setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timerId.current);
    };
  }, [start, count]);

  //logic to handle the start counter
  const handleStart = () => {
    setStart(true);
  };

  //clearing the timer id
  const handleStop = () => {
    clearTimeout(timerId.current);
    setStart(false);
  };
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
