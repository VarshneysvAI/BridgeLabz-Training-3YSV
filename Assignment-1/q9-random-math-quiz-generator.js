// Generate two operands and choose one operator at random.
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const selectedOperator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;

switch (selectedOperator) {
  case "+":
    correctAnswer = firstNumber + secondNumber;
    break;
  case "-":
    correctAnswer = firstNumber - secondNumber;
    break;
  case "*":
    correctAnswer = firstNumber * secondNumber;
    break;
  case "/":
    correctAnswer = (firstNumber / secondNumber).toFixed(2);
    break;
  default:
    throw new Error("Unsupported arithmetic operator.");
}

console.log(`Question: ${firstNumber} ${selectedOperator} ${secondNumber} = ?`);
console.log(`Correct answer: ${correctAnswer}`);
