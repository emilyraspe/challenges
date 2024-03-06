import "./App.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);
  const [text, setText] = useState("Activate");

  function handleClick() {
    setIsActive(!isActive);
    setText(isActive ? "Activate" : "Deactivate");
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>{text}</button>
    </main>
  );
}
