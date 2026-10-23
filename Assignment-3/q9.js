"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  "{invalid}",
  '{"user":"Mina","age":"22"}',
];
const cleanData = [];
const underEighteenUsers = [];

for (let index = 0; index < rawData.length; index += 1) {
  const lineNumber = index + 1;

  try {
    const parsedEntry = JSON.parse(rawData[index]);
    if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user")) {
      throw new Error("Missing user key.");
    }
    if (!Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
      throw new Error("Missing age key.");
    }

    const age = Number(parsedEntry.age);
    if (!Number.isFinite(age)) {
      throw new Error("Age must be a valid number.");
    }

    const cleanEntry = { user: parsedEntry.user, age };
    cleanData.push(cleanEntry);
    if (age < 18) {
      underEighteenUsers.push(cleanEntry);
    }
    console.log(`Line ${lineNumber}: valid entry for ${cleanEntry.user}.`);
  } catch (error) {
    console.log(`Line ${lineNumber}: error - ${error.message}`);
  }
}

console.log(`Clean data: ${JSON.stringify(cleanData)}`);
console.log(`Under-18 users: ${JSON.stringify(underEighteenUsers)}`);
