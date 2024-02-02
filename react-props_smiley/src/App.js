import React from "react";
import "./styles.css";

export default function App() {
  return (
    <h1>
      <Smiley isHappy />
      <Smiley />
    </h1>
  );
}

function Smiley({ isHappy }) {
  return (
    <h2 role="img" aria-label={isHappy ? "happy smiley" : "sad smiley"}>
      {isHappy ? "😀" : "😢"}
    </h2>
  );
}
