import "./List.css";

export default function List({ activities }) {
  return (
    <ul className="list__container">
      {activities.map((activity) => {
        return <li key={activity.id}>{activity.name}</li>;
      })}
    </ul>
  );
}
