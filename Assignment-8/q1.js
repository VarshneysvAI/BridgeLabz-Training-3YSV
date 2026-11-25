// Q1: Prepare coffee through three Promise-based asynchronous steps.

function completeCoffeeStep(stepName) {
  const delay = 1000 + Math.floor(Math.random() * 1001);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed.`));
        return;
      }

      console.log(`${stepName} complete.`);
      resolve();
    }, delay);
  });
}

completeCoffeeStep("Boiling water")
  .then(() => completeCoffeeStep("Brewing coffee"))
  .then(() => completeCoffeeStep("Pouring coffee into a cup"))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));