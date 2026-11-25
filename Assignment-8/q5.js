// Q5: Compare nested callbacks with an async/await build pipeline.

function runCallbackStage(stageName, callback) {
  setTimeout(() => {
    console.log(stageName);
    callback();
  }, 1000);
}

function runBuildWithCallbacks() {
  console.log("Callback pipeline:");

  runCallbackStage("design", () => {
    runCallbackStage("build", () => {
      runCallbackStage("test", () => {
        runCallbackStage("deploy", () => {
          runCallbackStage("celebrate", () => {
            runBuildWithAsyncAwait();
          });
        });
      });
    });
  });
}

function runAsyncStage(stageName) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(stageName);
      resolve();
    }, 1000);
  });
}

async function runBuildWithAsyncAwait() {
  console.log("Async/await pipeline:");

  await runAsyncStage("design");
  await runAsyncStage("build");
  await runAsyncStage("test");
  await runAsyncStage("deploy");
  await runAsyncStage("celebrate");
}

// Async/await keeps sequential asynchronous steps readable without deeply
// nested callbacks, while still using Promises under the hood.
runBuildWithCallbacks();
