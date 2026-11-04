// Q4: A prototype method is shared by all Car instances.

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

Car.prototype.getDetails = function () {
  console.log(`${this.brand} ${this.model}`);
};

const firstCar = new Car("Toyota", "Camry");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();
console.log(
  "Both cars use the same prototype method:",
  firstCar.getDetails === secondCar.getDetails
);

