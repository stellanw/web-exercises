import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Sum valueA={7} valueB={7} />
      <Sum valueA={89} valueB={79} />
      <Sum valueA={98} valueB={78} />
      <Sum valueA={1055885855} valueB={7987666} />
    </>
  );
}

function Sum({ valueA, valueB }) {
  const result = valueA + valueB;
  return <h2>{valueA + " + " + valueB + " = " + result}</h2>;
}

// function Sum({ valueA, valueB }) {
//   const result = valueA + valueB;
//   return <h2>{`${valueA} + ${valueB} = ${result}`}</h2>;
// }
