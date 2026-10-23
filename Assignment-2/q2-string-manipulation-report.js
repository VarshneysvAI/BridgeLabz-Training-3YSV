// Clean and format the product title before displaying it.
const productName = " wireless headphones PRO ";
const normalizedTitle = productName.trim().toLowerCase().replace("pro", "pro edition");
const lowerCaseWords = normalizedTitle.split(" ");
const capitalizedWords = lowerCaseWords.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1),
);
const cleanedTitle = capitalizedWords.join(" ");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
