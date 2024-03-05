import "./App.css";

export default function App() {
  return <Sum valueA={2} valueB={3} />;
}

function Sum({ valueA, valueB }) {
  let sum = valueA + valueB;
  return (
    <h1>
      {valueA} + {valueB} = {sum}
    </h1>
  );
}
