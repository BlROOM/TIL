//자신을 호출한 객체를 가리키는 키워드, 예약어

function speak() {
  console.log("speak");
}

speak();
// window.speak(); //<= 호출할때 사실은 이렇게 정의되어있는것
// 다만 window라는 객체를 생략가능하게 한 것

const person = {
  age: 20,
  // speak: function () {
  //   console.log(`제 나이는: ${this.age} 살`);
  // },
  // es6 에서 나온 문법
  speak() {
    console.log(`제 나이는: ${this.age} 살`);
  },
};

person.speak();
