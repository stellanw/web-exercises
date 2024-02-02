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
  return (
    <div>
      <h1>Welcome, {" " + name + "!"}</h1>
      <p>Wie gehts dir {name}?</p>
    </div>
  );
}
