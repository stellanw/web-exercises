import React from "react";
import "./styles.css";

function HelloWorld({ name }) {
  return <h1>Hello world!{name}</h1>;
}

export default function App() {
  return <HelloWorld name="Stellan" />;
}
