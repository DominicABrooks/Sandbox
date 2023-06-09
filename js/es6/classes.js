// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return `(${this.x}, ${this.y})`;
//     }
// }

// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         super(x, y); // calls Point constructor
//         this.color = color;
//     }
//     toString() {
//         return super.toString() + ' in ' + this.color;
//     }
// }

class Person {
    static totalPeople = 0;
  
    #name;
    #age;
  
    constructor(name, age) {
      this.#name = name;
      this.#age = age;
      Person.totalPeople++;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(newName) {
      this.#name = newName;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.#name} and I'm ${this.#age} years old.`);
    }
  
    static getTotalPeople() {
      console.log(`Total people: ${Person.totalPeople}`);
    }
  }
  
  class Student extends Person {
    #grade;
  
    constructor(name, age, grade) {
      super(name, age);
      this.#grade = grade;
    }
  
    get grade() {
      return this.#grade;
    }
  
    set grade(newGrade) {
      this.#grade = newGrade;
    }
  
    introduce() {
      super.sayHello();
      console.log(`I'm a student in grade ${this.#grade}.`);
    }
  }
  
  // Create instances and test the class functionality
  const person1 = new Person("Alice", 30);
  const person2 = new Person("Bob", 25);
  
  person1.sayHello(); // Output: Hello, my name is Alice and I'm 30 years old.
  person2.sayHello(); // Output: Hello, my name is Bob and I'm 25 years old.
  
  Person.getTotalPeople(); // Output: Total people: 2
  
  const student1 = new Student("Charlie", 18, 12);
  student1.introduce();
  // Output:
  // Hello, my name is Charlie and I'm 18 years old.
  // I'm a student in grade 12.
  
  student1.grade = 11;
  console.log(`New grade: ${student1.grade}`); // Output: New grade: 11
  
  Person.getTotalPeople(); // Output: Total people: 3
  