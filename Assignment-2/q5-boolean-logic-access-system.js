// Change these values to test other smart-home security outcomes.
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

const accessGranted =
  isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
const unsafeCondition =
  !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

if (accessGranted && !unsafeCondition) {
  console.log("Secure");
} else {
  console.log("Unsafe");
}
