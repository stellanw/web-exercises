import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Herbert" />
      <Greeting name="Karl" />
      <Greeting coach />
    </>
  );
}

function Greeting({ name, coach }) {
  return (
    <div>
      <h1>Welcome, {" " + (coach ? "Coach" : name) + "!"}</h1>
      <p>Wie gehts dir {coach ? "Coach" : name}?</p>
    </div>
  );
}
