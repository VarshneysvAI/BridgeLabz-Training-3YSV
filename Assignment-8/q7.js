// Q7: Load dashboard modules together and report every result.

function loadModule(message, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(`${message.replace("Loaded", "load")} failed`));
        return;
      }

      resolve(message);
    }, delay);
  });
}

const moduleNames = ["profile", "posts", "messages"];
const failedModuleIndex = Math.floor(Math.random() * moduleNames.length);
const startTime = Date.now();

const moduleLoads = [
  loadModule("Profile Loaded", 2000, failedModuleIndex === 0),
  loadModule("Posts Loaded", 1500, failedModuleIndex === 1),
  loadModule("Messages Loaded", 1000, failedModuleIndex === 2),
];

Promise.allSettled(moduleLoads).then((results) => {
  results.forEach((result, index) => {
    const moduleName = moduleNames[index];

    if (result.status === "fulfilled") {
      console.log(`${moduleName}: succeeded - ${result.value}`);
    } else {
      console.log(`${moduleName}: failed - ${result.reason.message}`);
    }
  });

  console.log(`Total time: ${Date.now() - startTime} ms`);
});
