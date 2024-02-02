import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Herbert" />
      <Greeting name="Karl" />
    </>
  );
}

function Greeting({ name }) {
  return <h1>Welcome, {" " + name + "!"}</h1>;
}
