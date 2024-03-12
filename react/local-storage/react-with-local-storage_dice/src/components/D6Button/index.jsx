//import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ rolls, setRolls }) {
  //const [rolls, setRolls] = useState([]);

  const currentRollValue = rolls[0]?.value;

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  return (
    <button className="d6-button" type="button" onClick={handleRoll}>
      <D6 value={currentRollValue} />
    </button>
  );
}
