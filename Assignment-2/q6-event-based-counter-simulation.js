let count = 0;

function increment() {
  count += 1;
  console.log(`Count after increment: ${count}`);
}

function decrement() {
  count -= 1;
  console.log(`Count after decrement: ${count}`);
}

function simulateClicks() {
  // This nested function can access and update count from the outer scope.
  function resetAndIncrement() {
    count = 0;
    count += 1;
    console.log(`Count inside nested function: ${count}`);
  }

  increment();
  increment();
  decrement();
  resetAndIncrement();
}

simulateClicks();
console.log(`Final count: ${count}`);
