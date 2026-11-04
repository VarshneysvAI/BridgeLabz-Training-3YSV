// Q6: Build the Person -> Faculty -> Professor prototype chain.

function Person(name) {
  this.name = name;
}

Person.prototype.introduce = function () {
  console.log(`Person: ${this.name}`);
};

function Faculty(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.teach = function () {
  console.log(`Teaching: ${this.subject}`);
};

function Professor(name, subject, researchArea) {
  Faculty.call(this, name, subject);
  this.researchArea = researchArea;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.research = function () {
  console.log(`Research area: ${this.researchArea}`);
};

const professor = new Professor(
  "Dr. Mehta",
  "JavaScript",
  "Programming Languages"
);

professor.introduce();
professor.teach();
professor.research();
console.log(
  "Prototype chain:",
  professor instanceof Professor &&
    professor instanceof Faculty &&
    professor instanceof Person
);

