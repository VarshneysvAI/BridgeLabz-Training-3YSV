"use strict";

class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary += this.salary * (percent / 100);
  }
}

const employees = [
  new Employee(1, "Amit", "IT", 60000),
  new Employee(2, "Sara", "HR", 50000),
  new Employee(3, "Kiran", "Finance", 65000),
  new Employee(4, "Neha", "Sales", 45000),
  new Employee(5, "Vikram", "Support", 40000),
];

employees.forEach((employee) => employee.applyBonus(5));
const totalAnnualPayout = employees.reduce(
  (total, employee) => total + employee.getAnnualSalary(),
  0,
);

employees.forEach((employee) =>
  console.log(`${employee.name}: annual salary ₹${employee.getAnnualSalary().toFixed(2)}`),
);
console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
