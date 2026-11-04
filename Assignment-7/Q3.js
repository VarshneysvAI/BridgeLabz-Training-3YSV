// Q3: Move between steps only after validating the current field.
const formSteps = [...document.querySelectorAll(".form-step")];
const stepInputs = [
  document.querySelector("#step-name"),
  document.querySelector("#step-email"),
  document.querySelector("#step-password"),
];
const nextStepButton = document.querySelector("#multi-step-next");
const backStepButton = document.querySelector("#multi-step-back");
const multiStepSummary = document.querySelector("#multi-step-summary");
let currentStepIndex = 0;

function validateStep(index) {
  const input = stepInputs[index];
  const errorElement = document.querySelector(`#${input.id}-error`);
  const isValid = input.value.trim() !== "" && (input.type !== "email" || input.value.includes("@"));
  errorElement.textContent = isValid ? "" : "Please enter a valid value.";
  return isValid;
}

function displayStep(index) {
  formSteps.forEach((step, stepIndex) => step.classList.toggle("active", stepIndex === index));
  backStepButton.hidden = index === 0;
  nextStepButton.textContent = index === formSteps.length - 1 ? "Finish" : "Next";
}

nextStepButton.addEventListener("click", () => {
  if (!validateStep(currentStepIndex)) return;

  if (currentStepIndex < formSteps.length - 1) {
    currentStepIndex += 1;
    displayStep(currentStepIndex);
  } else {
    multiStepSummary.textContent =
      `Summary: ${stepInputs[0].value} | ${stepInputs[1].value} | Password completed`;
  }
});

backStepButton.addEventListener("click", () => {
  if (currentStepIndex > 0) {
    currentStepIndex -= 1;
    displayStep(currentStepIndex);
  }
});

displayStep(currentStepIndex);
