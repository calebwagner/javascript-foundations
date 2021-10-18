// this is the basic syntax for a class - it must be declared and have a constructor
class Classname {
  constructor(parameter1, parameter2) {
    this.property1 = parameter1;
    this.property2 = parameter2;
  }
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// this creates a Person object by instantiating the class with the "new" keyword, passing the data to the constructor
let person1 = new Person("Bob", 45);
let person2 = new Person("Bobby", 50);
// this person1 has their own properties (aka data), no methods are used
console.log(person1.name);

let people = new Array();
people.push(person1);
people.push(person2);

// array to Json
let sjson = JSON.stringify(people);
console.log(sjson);

// convert Json to object & add to array
let newJsonData = `{
  "name": "Leny",
  "age": "33"
}`;
let newperson = new Person();
newperson = JSON.parse(newJsonData);
// lets make sure we got the data into an object
console.log(newperson.name);
people.push(newperson);
sjson = JSON.stringify(people);
console.log(sjson);
