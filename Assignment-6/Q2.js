// Q2: Apply different callback operations to every number in an array.

function applyOperation(numbers, operation) {
  const results = [];

  for (const number of numbers) {
    results.push(operation(number));
  }

  return results;
}

const numbers = [1, 2, 3, 4];
const doubledNumbers = applyOperation(numbers, (number) => number * 2);
const squaredNumbers = applyOperation(numbers, (number) => number ** 2);

console.log("Doubled:", doubledNumbers);
console.log("Squared:", squaredNumbers);

