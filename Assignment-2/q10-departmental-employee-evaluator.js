const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63],
];

for (const [departmentName, performanceScore] of departments) {
  let performanceRating;

  if (performanceScore >= 90) {
    performanceRating = "Excellent";
  } else if (performanceScore >= 75) {
    performanceRating = "Good";
  } else if (performanceScore >= 60) {
    performanceRating = "Average";
  } else {
    performanceRating = "Needs Improvement";
  }

  console.log(
    `${departmentName}: ${performanceScore} - ${performanceRating}`,
  );
}
