import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 145, name: "🍌 banana", color: "yellow" },
    {
      id: 268,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 376,
      name: "🍐 pear",
      color: "green",
    },
    {
      id: 498,
      name: "🍉 melon",
      color: "green",
    },
    {
      id: 575,
      name: "🥝 kiwi",
      color: "brown",
    },
    {
      id: 698,
      name: "🍍 pineapple",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
