"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];
const conversionReport = [];

for (const value of apiData) {
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const isValidNumber =
    typeof value !== "undefined" &&
    !(typeof value === "string" && value.trim() === "") &&
    !Number.isNaN(numberValue) &&
    Number.isFinite(numberValue);

  conversionReport.push(
    `Value: ${stringValue} | Number: ${numberValue} | Boolean: ${booleanValue} | String: "${stringValue}"`,
  );

  if (isValidNumber) {
    validNumbers.push(numberValue);
  } else {
    invalidNumbers.push(value);
  }
}

console.log("Conversion report:");
for (const line of conversionReport) {
  console.log(line);
}
console.log(`Valid numeric data: ${JSON.stringify(validNumbers)}`);
console.log(`Invalid numeric data: ${JSON.stringify(invalidNumbers)}`);
console.log(`Valid count: ${validNumbers.length}`);
console.log(`Invalid count: ${invalidNumbers.length}`);