"use strict";

class InvalidOperationError extends Error {}

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;
const operation = operations[1];

function calculate(selectedOperation, firstNumber, secondNumber) {
  switch (selectedOperation) {
    case "add":
      return firstNumber + secondNumber;
    case "divide":
      if (secondNumber === 0) {
        throw new RangeError("Cannot divide by zero.");
      }
      return firstNumber / secondNumber;
    case "power":
      return firstNumber ** secondNumber;
    case "root":
      if (firstNumber < 0) {
        throw new RangeError("Cannot calculate the root of a negative number.");
      }
      return Math.sqrt(firstNumber);
    case "subtract":
      return firstNumber - secondNumber;
    default:
      throw new InvalidOperationError(`Unknown operation: ${selectedOperation}`);
  }
}

try {
  const result = calculate(operation, num1, num2);
  console.log(`Operation: ${operation}`);
  console.log(`Inputs: ${num1}, ${num2}`);
  console.log(`Result: ${result}`);
} catch (error) {
  console.log(`Calculator error (${error.constructor.name}): ${error.message}`);
}
