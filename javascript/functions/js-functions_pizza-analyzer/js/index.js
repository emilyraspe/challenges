console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
  let pizzaSize1 = pizzaInput1.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1, diameter2) {
  //Pizza 1
  let radius1 = diameter1 / 2;
  let area1 = Math.PI * radius1 * radius1;

  //Pizza 2
  let radius2 = diameter2 / 2;
  let area2 = Math.PI * radius2 * radius2;

  //Pizza gain
  let pizzaGain = ((area2 - area1) / area1) * 100;

  output.textContent = Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const result = (newSize / 24) * 100;
  pizzaElement.style.width = result + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor;
}
