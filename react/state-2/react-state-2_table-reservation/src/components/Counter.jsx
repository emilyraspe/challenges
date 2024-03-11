import "./Counter.css";

export default function Counter({ people, setPeople }) {
  function hanldeAdding() {
    setPeople(people + 1);
  }
  function handleSubtracting() {
    setPeople(people - 1);
  }
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={hanldeAdding}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={handleSubtracting}
        >
          -
        </button>
      </div>
    </>
  );
}
