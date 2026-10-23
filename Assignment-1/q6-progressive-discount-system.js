// Set the purchase total to test each discount tier.
const originalTotal = 7500;
let discountPercentage;

if (originalTotal >= 10000) {
  discountPercentage = 25;
} else if (originalTotal >= 5000) {
  discountPercentage = 15;
} else if (originalTotal >= 2000) {
  discountPercentage = 5;
} else {
  discountPercentage = 0;
}

const discountAmount = (originalTotal * discountPercentage) / 100;
const finalPrice = Math.round(originalTotal - discountAmount);

console.log(`Original total: ${Math.round(originalTotal)}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Final price after discount: ${finalPrice}`);
