// Q2: Show synchronous, microtask, and macrotask execution order.

console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then callback");
});

console.log("Synchronous log");
console.log("End");

// Synchronous code finishes first. The event loop then drains the microtask
// queue before it runs callbacks waiting in the macrotask queue.
