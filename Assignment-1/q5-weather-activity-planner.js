// Change these values to plan an activity for different weather conditions.
const temperature = 24;
const isRaining = false;
const windSpeed = 12;

let activityAdvice;
if (isRaining) {
  activityAdvice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  activityAdvice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  activityAdvice = "Too cold and windy — stay home.";
} else {
  activityAdvice = "Perfect day for a walk.";
}

console.log(activityAdvice);
