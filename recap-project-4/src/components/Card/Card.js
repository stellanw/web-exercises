import "./Card.css";

export default function Card({ name, isGoodWeatherActivity }) {
  return (
    <div className="card__container">
      <h2>Activity: {name}</h2>
      <p>Good Weather Activity: {isGoodWeatherActivity ? "Yes" : "No"}</p>
    </div>
  );
}
