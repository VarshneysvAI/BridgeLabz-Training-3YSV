// Generate eight random scores, including both endpoints 30 and 100.
const scores = Array.from(
  { length: 8 },
  () => Math.floor(Math.random() * 71) + 30,
);

const normalizedScores = scores.map((score) => Number(score));
const highestScore = Math.max(...normalizedScores);
const lowestScore = Math.min(...normalizedScores);
const totalScore = normalizedScores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / normalizedScores.length;
const passedStudents = normalizedScores.filter((score) => score >= 50).length;

console.log("Array Performance Summary");
console.log(`Scores: ${normalizedScores.join(", ")}`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students who passed: ${passedStudents}`);
