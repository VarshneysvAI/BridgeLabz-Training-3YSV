// Q7: The returned function closes over multiplier.

function makeMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// The inner function remembers multiplier even after makeMultiplier() finishes.

