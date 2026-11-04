// Q3: Arrow functions do not create their own `this`.

const userWithArrowMethod = {
  name: "Aarav",
  showName: () => {
    console.log("Arrow function name:", this.name);
  },
};

userWithArrowMethod.showName();
console.log(
  "In an arrow function, this comes from the surrounding scope, not from userWithArrowMethod."
);

const userWithNormalMethod = {
  name: "Aarav",
  showName: function () {
    console.log("Normal function name:", this.name);
  },
};

userWithNormalMethod.showName();

