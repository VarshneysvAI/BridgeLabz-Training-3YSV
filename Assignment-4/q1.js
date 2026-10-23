"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(discountPercentage) {
    this.price -= this.price * (discountPercentage / 100);
  }

  getDetails() {
    return `${this.id}: ${this.name} | ${this.category} | ₹${this.price.toFixed(2)}`;
  }
}

const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Headphones", 1800, "Audio"),
  new Product(3, "Notebook", 450, "Stationery"),
];

products[1].applyDiscount(10);
console.log("Products priced above ₹1000:");
products
  .filter((product) => product.price > 1000)
  .forEach((product) => console.log(product.getDetails()));