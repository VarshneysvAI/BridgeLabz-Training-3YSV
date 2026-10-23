"use strict";

// Duplicate parameters and deleting an unqualified variable are illegal in
// strict mode. Function constructors let us run each invalid example safely.
try {
  Function('"use strict"; function demo(a, a) { return a; }')();
} catch (error) {
  console.log(`With strict mode, duplicate parameters error: ${error.message}`);
}

try {
  Function('"use strict"; let total = 10; delete total;')();
} catch (error) {
  console.log(`With strict mode, delete error: ${error.message}`);
}

try {
  const sloppyDemo = Function(
    "function demo(a, a) { var total = 10; return [a, total]; } return demo(5, 10);",
  );
  console.log(`Without strict mode: duplicate parameter accepted -> ${JSON.stringify(sloppyDemo())}`);
} catch (error) {
  console.log(`Without strict mode error: ${error.message}`);
}

function correctDemo(firstValue, secondValue) {
  const total = firstValue + secondValue;
  return total;
}

console.log(`Correct ES6 version result: ${correctDemo(5, 10)}`);
