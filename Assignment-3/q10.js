"use strict";

function outer() {
  console.log(count);
  var count = 5;

  function inner() {
    console.log(count);
    var count = 10;
    console.log(count);
  }

  inner();
}

// Output is undefined, undefined, then 10 because each var is hoisted inside
// its own function memory context.
outer();
console.log("Call stack flow: global scope -> outer() -> inner() -> outer() -> global scope.");

function outerWithArrow() {
  const outerCount = 5;
  const innerArrow = () => {
    // This arrow closes over outerCount rather than declaring a local count.
    console.log(`Arrow inner count: ${outerCount}`);
  };

  innerArrow();
}

outerWithArrow();
console.log("Arrow observation: the arrow function closes over the outer lexical variable and prints 5.");
