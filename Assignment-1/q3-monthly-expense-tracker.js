// Expenses are listed in the requested five categories.
const expenses = {
  food: 4500,
  travel: 1800,
  rent: 12000,
  bills: 2500,
  leisure: 1200,
};

let totalExpenses = 0;
for (const expense of Object.values(expenses)) {
  totalExpenses += expense;
}

const averageExpense = totalExpenses / Object.keys(expenses).length;
const taxRate = 0.10;

// Add 10% tax to the total using an assignment operator.
totalExpenses += totalExpenses * taxRate;

console.log(`Total expenses before tax: ${ (totalExpenses / (1 + taxRate)).toFixed(2) }`);
console.log(`Average expense: ${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ${totalExpenses.toFixed(2)}`);
