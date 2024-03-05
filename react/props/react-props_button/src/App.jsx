import "./App.css";

export default function App() {
  function handleClick() {
    alert("You clicked the button!");
  }
  return (
    <Button
      color="#000000"
      disabled={false}
      text="click me"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{ color: color }}>
      {text}
    </button>
  );
}
