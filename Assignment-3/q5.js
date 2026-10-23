"use strict";

// var is initialized to undefined, function declarations are available early,
// and let remains unavailable in its temporal dead zone until initialized.
function runHoistingExample() {
  let score;
  function announce() {
    console.log("Game started");
  }

  console.log(`Hoisted score before assignment: ${score}`);
  announce();
  score = 50;
  let status = "ready";

  function startGame() {
    console.log(`Game status: ${status}`);
  }

  startGame();
}

runHoistingExample();

// Arrow function expressions are not callable before their const declarations.
const score = 50;
const status = "ready";
const announceArrow = () => console.log("Arrow game started");
const startGameArrow = () => console.log(`Arrow game status: ${status}`);

console.log(`Fixed score: ${score}`);
announceArrow();
startGameArrow();
