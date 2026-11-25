// Q9: Predicted output order:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise callback");
});

console.log("Script end");

// Synchronous statements run first. Promise callbacks are microtasks, which
// the event loop drains before starting the next macrotask (setTimeout).
