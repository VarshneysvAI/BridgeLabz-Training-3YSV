// Q5: Student inherits Person's properties and prototype methods.

function Person(name) {
  this.name = name;
}

Person.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const student = new Student("Diya", "Computer Science");
student.printName();
student.printBranch();
console.log(
  "Student inherits from Person:",
  student instanceof Student && student instanceof Person
);

