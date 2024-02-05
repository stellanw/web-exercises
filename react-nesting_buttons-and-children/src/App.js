import React from "react";
import "./styles.css";

export default function App({ children }) {
  return (
    <main>
      <Button>{(children = "Click for more information")}</Button>
      <Button>{(children = "Click here")}</Button>
      <Button>{(children = "Read more")}</Button>
      <Button>{(children = "Submit")}</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
