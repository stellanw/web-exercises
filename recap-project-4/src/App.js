import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import { useState, useEffect } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [activities, setActivities] = useLocalStorageState("activites", {
    defaultValue: [],
  });
  const [isGoodWeatherActivity, setIsGoodWeatherActivity] =
    useLocalStorageState("isGoodWeatherActivity", {
      defaultValue: false,
    });

  function handleAddActivity(newActivity) {
    const id = uid();
    setActivities([...activities, { ...newActivity, id }]);
  }

  const filteredActivities = activities
    ? activities.filter((activity) => activity.isGoodWeatherActivity)
    : [];

  return (
    <div className="App">
      <h1>Weather Activity App</h1>
      <h2>
        {" "}
        {isGoodWeatherActivity
          ? "Good Weather Activities:"
          : "Bad Weather Activities:"}
      </h2>
      <List activities={filteredActivities} />
      <Form
        onAddActivity={handleAddActivity}
        setIsGoodWeatherActivity={setIsGoodWeatherActivity}
      />
    </div>
  );
}

export default App;
