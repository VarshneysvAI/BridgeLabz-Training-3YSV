// Create sample values representing different kinds of database entries.
const userName = "Alex";
const accountBalance = 2450.75;
const isActive = true;
const favoriteColors = ["blue", "green"];
const userProfile = { id: 101, role: "customer" };
const middleName = null;
let lastLogin;

// Array.isArray() is checked before typeof because typeof arrays is "object".
const dataSummary = [
  { label: "User name", value: userName, type: typeof userName },
  { label: "Account balance", value: accountBalance, type: typeof accountBalance },
  { label: "Active status", value: isActive, type: typeof isActive },
  {
    label: "Favorite colors",
    value: favoriteColors,
    type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors,
  },
  { label: "User profile", value: userProfile, type: typeof userProfile },
  { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "Last login", value: lastLogin, type: typeof lastLogin },
];

console.table(dataSummary);
