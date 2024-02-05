import React from "react";
import "./styles.css";
import Box from "./components/Box";

function Boxes({ children }) {
  return (
    <>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </>
  );
}

export default function App() {
  return (
    <main className="flex-container">
      <Boxes />
    </main>
  );
}
