const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];

const cartTotal = cart.reduce((total, product) => total + product.price, 0);
const discountedItems = cart.map((product) => {
  let discountRate = 0;

  if (product.category === "electronics") {
    discountRate = 0.10;
  } else if (product.category === "fashion") {
    discountRate = 0.05;
  }

  return {
    ...product,
    discountedPrice: product.price * (1 - discountRate),
  };
});

const categoryDiscountTotal = discountedItems.reduce(
  (total, product) => total + product.discountedPrice,
  0,
);
const extraDiscountRate = cartTotal > 50000 ? 0.05 : 0;
const finalTotal = categoryDiscountTotal * (1 - extraDiscountRate);

console.log(`Original cart total: ${cartTotal.toFixed(2)}`);
console.log(`Category-discounted total: ${categoryDiscountTotal.toFixed(2)}`);
console.log(`Extra overall discount: ${extraDiscountRate * 100}%`);
console.log(`Final cart total: ${finalTotal.toFixed(2)}`);
