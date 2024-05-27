const person = {
  name: "john",
  age: 30,
};

const person2 = {
  name: "john",
  age: 30,
};

function CreatePerson(name, age) {
  this.name = name;
  this.age = age;
}

const person3 = new CreatePerson("john", 20); //new 키워드를 붙여서 createPerson 호출하면
// function createPerson() {
// this = {}
// return this
// }  이렇게 생략되어 호출된다.

CreatePerson.prototype.speak = function () {
  console.log(`안녕하세요 제 이름은${this.name}`);
};

const person4 = new CreatePerson("jun", 25);
const person5 = new CreatePerson("kim", 30);

console.log(person3);
console.log(person4);
console.log(person5);
