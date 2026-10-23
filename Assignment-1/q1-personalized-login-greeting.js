// Store the user's name and read the current hour from the system clock.
const userName = "Alex";
const currentHour = new Date().getHours();

let greetingMessage;

if (currentHour < 12) {
  greetingMessage = `Good Morning ${userName}!`;
} else if (currentHour <= 17) {
  greetingMessage = `Good Afternoon ${userName}!`;
} else {
  greetingMessage = `Good Evening ${userName}!`;
}

console.log(greetingMessage);
