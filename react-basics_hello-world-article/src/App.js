import React from "react";
import "./styles.css";

function HelloWorldArticle({ vegetables }) {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>I love {vegetables}.</p>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <HelloWorldArticle vegetables={"Brokkoli"} />
    </div>
  );
}
