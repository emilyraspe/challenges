import "./App.css";

export default function App() {
  return <Greeting name="Jan" />;
}

function Greeting({ name }) {
  const coaches = ["Jan", "Sven"];
  return <h1>Hello {coaches.includes(name) ? "Coach" : null}!</h1>;
}
