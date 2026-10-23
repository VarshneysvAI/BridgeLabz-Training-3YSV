// This variable is global and remains unchanged by the local function variables.
let bonus = 5000;

function calculateSalary(isPermanent) {
  // salary and isPermanent belong only to this function scope.
  const salary = 40000;
  let totalSalary = salary;

  if (isPermanent === true) {
    totalSalary += bonus;
  }

  console.log(`Permanent employee: ${isPermanent}`);
  console.log(`Total salary: ${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus after both calculations: ${bonus}`);
