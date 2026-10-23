// Change these inputs to validate a different person's eligibility.
const age = 19;
const isCitizen = true;
let eligibilityMessage;

if (isCitizen) {
  if (age >= 18) {
    if (age >= 21) {
      eligibilityMessage = "Eligible for all services.";
    } else {
      eligibilityMessage = "Eligible to vote only.";
    }
  } else {
    eligibilityMessage = "Not eligible yet.";
  }
} else if (age >= 18) {
  eligibilityMessage = "Only age criteria met.";
} else {
  eligibilityMessage = "Not eligible yet.";
}

console.log(eligibilityMessage);
