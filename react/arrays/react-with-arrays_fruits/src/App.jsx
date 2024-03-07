import Card from "./components/Card";
import "./App.css";

export default function App() {
  const fruits = [
    {
      id: 1,
      name: "🍌 Banana",
      color: "orange",
    },

    {
      id: 2,
      name: "🍓 Strawberry",
      color: "red",
    },

    {
      id: 3,
      name: "🍎 Apple",
      color: "red",
    },

    {
      id: 4,
      name: "🍐 Pear",
      color: "green",
    },

    {
      id: 5,
      name: "🍊 Orange",
      color: "orange",
    },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} />
      ))}
    </div>
  );
}
