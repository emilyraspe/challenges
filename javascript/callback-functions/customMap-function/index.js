const numbers = [1, 2, 3, 4, 5];

function myMap(numbers, double) {
  const newArray = numbers.map((element) => {
    return double(element);
  });
  return newArray;
}

function double(number) {
  return number * 2;
}

const doubledNumbers = myMap(numbers, double);
console.log(doubledNumbers);
