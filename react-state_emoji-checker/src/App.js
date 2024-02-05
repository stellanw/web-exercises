import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [code, setCode] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(false);
  const validCode = "🐡🐠🐋";

  function handleClick() {
    const clickedEmoji = event.target.textContent;
    const newCode = code + clickedEmoji;
    setCode(newCode);

    setIsCodeValid(newCode === validCode);
  }

  function handleReset() {
    setCode("");
    setIsCodeValid(false);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleClick()}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick();
            console.log(handleClick());
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick();
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={() => {
          handleReset();
        }}
      >
        Reset
      </button>

      {isCodeValid && <p>Valid code!</p>}
    </div>
  );
}
