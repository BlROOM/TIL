// 기본 자료형
// 래퍼 객체 (Wrapper Object)
// 자바스크립트는 기본 자료형을 객체로 다루기 위해 래퍼 객체를 제공
// 1. number Number()
// 2. string String()
// 3. boolean Bolean()
//  자바스크립트는 기본 자료형을 객체로 다루기 위해 래퍼 객체를 제공

// const a = "hello";
const a = new String("hello"); // a는 인스턴스 객체
console.log(a.length);
console.log(a.toString());

// a는 기본자료형
// 기본 자료형은 객체가 아니라서 속성과 메소드를 가질 수 없다.
// 일시적으로 래퍼 객체(wrapper) 객체로 변환

// const b = {};
// console.log();

const num1 = 10;
const num2 = new Number(10);
console.log(num1 instanceof Number); //false
console.log(num2 instanceof Number); // true
console.log(num2);

console.log(num1.toFixed(1));
console.log(num2.toFixed(2));
console.dir(num2);
