import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [numberValue, setNumberValue] = useState(0);

  // function handleClick(term) {
  //   setNumberValue((prevValue) => prevValue + term);
  // }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={numberValue} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => setNumberValue(numberValue + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setNumberValue(numberValue - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
