import React, { useState } from "react";
import "./styles.css";

function Button({ color, disabled, buttonText }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <button
      style={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "60px",
        width: "120px",
        margin: "1rem",
        borderRadius: "5px",
        border: "0",
        fontSize: "1rem",
        fontFamily: "Helvetica",
        color: "white",
        backgroundColor: disabled ? "gray" : color,
      }}
      onClick={() => handleClick()}
    >
      {disabled
        ? "I'm disabled"
        : clicked
        ? "Thanks for clicking me!"
        : buttonText}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button buttonText={"I'm a Button"} color={"lightblue"} />
      <Button buttonText={"I'm a Button"} color={"lightcoral"} />
      <Button buttonText={"I'm a Button"} disabled />
      <Button buttonText={"I'm a Button"} color={"lightpink"} />
      <Button buttonText={"I'm a Button"} color={"lightgreen"} />
    </div>
  );
}
