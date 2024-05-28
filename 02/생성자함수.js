// const person = {
//   name: "john",
//   age: 30,
// };

// const person2 = {
//   name: "john",
//   age: 30,
// };

// function CreatePerson(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person3 = new CreatePerson("john", 20); //new 키워드를 붙여서 createPerson 호출하면
// // function createPerson() {
// // this = {}
// // return this
// // }  이렇게 생략되어 호출된다.

// CreatePerson.prototype.speak = function () {
//   console.log(`안녕하세요 제 이름은${this.name}`);
// };

// const person4 = new CreatePerson("jun", 25);
// const person5 = new CreatePerson("kim", 30);

// console.log(person3);
// console.log(person4);
// console.log(person5);

function Shape(color) {
  this.color = color;
  this.getColor = function () {
    return this.color;
  };
}

function Rectangle(color, width, height) {
  Shape.call(this, color);
  //call 을 통해 Shape 호출하여 에 바인딩되어있는 color 값을
  // Rectangle 에 call메소드를 통해 바인딩
  this.width = width;
  this.height = height;
  this.getArea = function () {
    return this.width * this.height;
  };
}
