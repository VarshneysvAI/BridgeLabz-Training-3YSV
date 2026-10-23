"use strict";

// In strict mode, assigning to undeclared greeting causes ReferenceError.
// The fix declares the variable in the function's local scope.
function showMessage() {
  const greeting = "Welcome";
  const watchVariable = `Greeting length: ${greeting.length}`;
  console.log(greeting);
  console.log(watchVariable);
}

showMessage();
console.log("Debug observation: call stack is global scope -> showMessage().");
console.log("Debug observation: watchVariable can be inspected while paused in showMessage().");
