import { useState } from "react";
import "./Form.css";
import useLocalStorageState from "use-local-storage-state";

export default function Form({
  onAddActivity,
  isGoodWeatherActivity,
  setIsGoodWeatherActivity,
}) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddActivity({
      name: name,
      isGoodWeatherActivity: isGoodWeatherActivity,
    });
    event.target.reset();
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add a new Activity</h2>
      <label htmlFor="name" className="form__label">
        Name:{" "}
        <input
          id="name"
          type="text"
          name="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <label htmlFor="isGoodWeather" className="form__label">
        Good weather activity?
        <input
          id="isGoodWeather"
          type="checkbox"
          name="isGoodWeather"
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
