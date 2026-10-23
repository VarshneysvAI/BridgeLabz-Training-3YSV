"use strict";

const requestedLimit = 5;
const rowLimit = Number.isInteger(requestedLimit) && requestedLimit > 0
  ? requestedLimit
  : 5;

function printPyramid(limit) {
  for (let row = 1; row <= limit; row += 1) {
    let line = "";
    for (let column = 1; column <= row; column += 1) {
      line += "* ";
    }
    console.log(line.trim());
  }
}

console.log(`Pyramid with limit ${rowLimit}:`);
printPyramid(rowLimit);

// With synchronous output, var produces the same visible pattern. In an
// asynchronous callback, var would reuse one function-scoped loop variable.
function printWithVar(limit) {
  for (var row = 1; row <= limit; row += 1) {
    var line = "";
    for (var column = 1; column <= row; column += 1) {
      line += "* ";
    }
    console.log(`var row ${row}: ${line.trim()}`);
  }
}

console.log("var comparison:");
printWithVar(4);
console.log("Debug observation: row and column are reused function-scoped variables when var is used.");
