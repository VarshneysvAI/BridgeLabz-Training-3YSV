// Q3: Replace the callback-based bug fetcher with a Promise.

function getBugs() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.3;

      if (shouldFail) {
        reject(new Error("The bug tracker API request failed."));
        return;
      }

      resolve(["UI glitch", "API timeout", "Login failure"]);
    }, 1000);
  });
}

getBugs()
  .then((bugs) => {
    console.table(bugs.map((description) => ({ Bug: description })));
  })
  .catch((error) => {
    console.error("Unable to fetch bugs:", error.message);
  });
