import "./App.css";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [activities, setActivities] = useState([]);

  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities([...activities, { ...newActivity, id }]);
  }

  return (
    <div className="App">
      <h1>Weather Activity App</h1>
      <Form onAddActivity={handleAddActivity} />
      {activities.map((activity) => (
        <Card
          key={activity.id}
          name={activity.name}
          isGoodWeatherActivity={activity.isGoodWeatherActivity}
        />
      ))}
    </div>
  );
}

export default App;
