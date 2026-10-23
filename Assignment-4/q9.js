"use strict";

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(name, price, quantity) {
    this.items.push({ name, price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(coupon) {
    const couponMatch = /^(SAVE|DISC)(\d+)$/.exec(coupon);
    if (!couponMatch) {
      throw new Error("Coupon must match SAVE20 or DISC10 format.");
    }

    const discountPercentage = Number(couponMatch[2]);
    if (discountPercentage > 100) {
      throw new Error("Coupon discount cannot exceed 100%.");
    }
    return this.getTotal() * (1 - discountPercentage / 100);
  }
}

const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
const coupon = "SAVE20";

try {
  const subtotal = cart.getTotal();
  const finalTotal = cart.applyCoupon(coupon);
  console.log(`Cart subtotal: ₹${subtotal.toFixed(2)}`);
  console.log(`Coupon applied: ${coupon}`);
  console.log(`Final total: ₹${finalTotal.toFixed(2)}`);
} catch (error) {
  console.log(`Coupon error: ${error.message}`);
}
