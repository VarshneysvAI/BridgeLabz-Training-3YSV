// Analyze the review text for word count and negative keywords.
const feedback =
  "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const feedbackInLowerCase = feedback.toLowerCase();
const containsNegativeFeedback =
  feedbackInLowerCase.includes("bad") ||
  feedbackInLowerCase.includes("poor");

console.log(`Word count: ${words.length}`);
if (containsNegativeFeedback) {
  console.log("Needs Improvement");
} else {
  console.log("Positive Feedback");
}
