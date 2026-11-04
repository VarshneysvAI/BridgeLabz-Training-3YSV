// Q9: ES6 class inheritance provides the same behavior as prototype inheritance.

function PrototypePerson(name) {
  this.name = name;
}

PrototypePerson.prototype.printName = function () {
  console.log(`Name: ${this.name}`);
};

function PrototypeStudent(name, branch) {
  PrototypePerson.call(this, name);
  this.branch = branch;
}

PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;

PrototypeStudent.prototype.printBranch = function () {
  console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new PrototypeStudent("Diya", "Computer Science");
console.log("Prototype version:");
prototypeStudent.printName();
prototypeStudent.printBranch();

class ClassPerson {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(`Name: ${this.name}`);
  }
}

class ClassStudent extends ClassPerson {
  constructor(name, branch) {
    super(name);
    this.branch = branch;
  }

  printBranch() {
    console.log(`Branch: ${this.branch}`);
  }
}

const classStudent = new ClassStudent("Diya", "Computer Science");
console.log("Class version:");
classStudent.printName();
classStudent.printBranch();
console.log(
  "Both versions inherit from their parent:",
  prototypeStudent instanceof PrototypePerson &&
    classStudent instanceof ClassPerson
);
console.log(
  "Both versions expose the same student data:",
  prototypeStudent.name === classStudent.name &&
    prototypeStudent.branch === classStudent.branch
);
console.log(
  "Class student inherits from ClassPerson:",
  classStudent instanceof ClassStudent && classStudent instanceof ClassPerson
);
