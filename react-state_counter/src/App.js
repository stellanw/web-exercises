import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick(newValue) {
    setCount(count + newValue);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick(-1);
          }}
        >
          -
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick(+1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
