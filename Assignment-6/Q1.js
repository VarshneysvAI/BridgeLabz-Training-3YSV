// Q1: Demonstrate a callback that runs after greetUser().

function showEndMessage() {
  console.log("Welcome to the course!");
}

function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greetUser("Student", showEndMessage);

