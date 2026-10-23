// A new secret number is generated between 1 and 50 for each run.
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25;
const difference = Math.abs(userGuess - secretNumber);

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  if (difference <= 3) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
