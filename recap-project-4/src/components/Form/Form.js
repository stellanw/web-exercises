import { useState } from "react";
import "./Form.css";

function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isGoodWeatherActivity, setIsGoodWeatherActivity] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("new submit", setName, setIsGoodWeatherActivity);
    onAddActivity({
      name: name,
      isGoodWeatherActivity: isGoodWeatherActivity,
    });
    setName("");
    setIsGoodWeatherActivity(false);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new Activity</h2>
      <label className="form__label" name="input">
        Name:{" "}
        <input
          type="text"
          name="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label className="form__label">
        Good weather activity?
        <input
          type="checkbox"
          checked={isGoodWeatherActivity}
          onChange={(event) => setIsGoodWeatherActivity(event.target.checked)}
        />
      </label>
      <button type="submit" className="form__button">
        Submit
      </button>
    </form>
  );
}

export default Form;
