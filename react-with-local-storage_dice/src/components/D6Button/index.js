import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  const handleRoll = () => {
    const addRoll = { value: getD6Roll(), time: Date.now() };
    onRoll(addRoll);
  };

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={value} />
    </button>
  );
}
