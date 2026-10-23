// Salary increases by the same percentage at the end of each year.
const currentSalary = 60000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const salaryProjection = [];

for (let year = 1; year <= 5; year += 1) {
  projectedSalary += projectedSalary * (annualIncrementRate / 100);
  projectedSalary = Math.round(projectedSalary);
  salaryProjection.push({
    year: `Year ${year}`,
    salary: projectedSalary,
  });
}

console.table(salaryProjection);
