// Marks for five subjects are supplied as an array of values out of 100.
const marks = [88, 91, 84, 79, 93];
const totalMarks = marks.reduce((total, mark) => total + mark, 0);
const averageMarks = totalMarks / marks.length;
const overallPercentage = (totalMarks / (marks.length * 100)) * 100;
const hasFailedSubject = marks.some((mark) => mark < 35);

let performanceResult;
if (hasFailedSubject) {
  performanceResult = "Detained";
} else if (overallPercentage >= 85) {
  performanceResult = "Promoted with Distinction";
} else if (overallPercentage >= 50) {
  performanceResult = "Promoted";
} else {
  performanceResult = "Detained";
}

console.log(`Average marks: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);
console.log(performanceResult);
