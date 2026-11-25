// Q10: Run an asynchronous food delivery pipeline.

function runDeliveryStep(stepName, delay, successMessage) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.2) {
        reject(new Error(`${stepName} failed.`));
        return;
      }

      console.log(successMessage);
      resolve();
    }, delay);
  });
}

async function runPipeline() {
  console.log("Start Pipeline");

  try {
    // Each await pauses this async function until its step settles. The event
    // loop can handle other work while the timer for that step is pending.
    await runDeliveryStep(
      "takeOrder",
      1000 + Math.floor(Math.random() * 1001),
      "Step 1: Order taken"
    );
    await runDeliveryStep(
      "prepare",
      1000 + Math.floor(Math.random() * 1001),
      "Step 2: Food prepared"
    );
    await runDeliveryStep(
      "pack",
      1000 + Math.floor(Math.random() * 1001),
      "Step 3: Package ready"
    );
    await runDeliveryStep(
      "dispatch",
      1000 + Math.floor(Math.random() * 1001),
      "Step 4: Out for delivery"
    );
    await runDeliveryStep(
      "deliver",
      1000 + Math.floor(Math.random() * 1001),
      "Delivery completed!"
    );
  } catch (error) {
    console.error("Pipeline failed!", error.message);
  }
}

runPipeline();
