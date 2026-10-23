"use strict";

class NegativeAmountError extends Error {}
class MissingTransactionDataError extends Error {}
class NullTransactionError extends Error {}

const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];
const validTransactions = [];
const invalidTransactions = [];

for (let index = 0; index < transactions.length; index += 1) {
  const transaction = transactions[index];

  try {
    // A debugger breakpoint can be placed here to watch index and transaction.
    if (transaction === null) {
      throw new NullTransactionError("Transaction entry is null.");
    }
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new MissingTransactionDataError("Transaction id or amount is missing.");
    }
    if (transaction.amount < 0) {
      throw new NegativeAmountError("Transaction amount cannot be negative.");
    }

    validTransactions.push(transaction);
    console.log(`Valid transaction: ID ${transaction.id}, amount ${transaction.amount}`);
  } catch (error) {
    invalidTransactions.push({
      index: index + 1,
      reason: error.message,
      type: error.constructor.name,
    });
    console.log(`Invalid transaction ${index + 1}: ${error.constructor.name} - ${error.message}`);
  }
}

console.log(`Successful transactions: ${validTransactions.length}`);
console.log(`Failed transactions: ${invalidTransactions.length}`);
console.log(`Invalid report: ${JSON.stringify(invalidTransactions)}`);
