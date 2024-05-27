// while (true) {
//   console.log("infinite while");
// }

//do 괄호 안에 코드 무조건 한 번은 실행
// do {
//   console.log("do while");
// } while (ea);
// {
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// const fruits = ["apple", "banana", "melon"];

// let i = 0;
// while (i < fruits.length) {
//   console.log(fruits[i]);
//   i++;
// }

// do {
//   console.log(fruits[i]);
//   console.log("do while", i);
//   i++;
// } while (i < fruits.length);

// for (let i = 0; i < 3; i++) {
//   console.log("i입니다: ", i);
//   for (let j = 0; j < 3; j++) {
//     console.log("j입니다: ", j);
//   }
// }

// for..in
// for..in문은 배열이나 객체를 반복할 때 사용합니다.
// let arr = ["banana", "apple", "orange"];
// let obj = { name: "철수", age: 20 };

// for (let index in arr) {
//   console.log(index);
// }

// for (let key in obj) {
//   console.log(obj[key]);
// }

// for..of
// 객체는 순환못함!
// for of문은 배열을 반복할 때 사용하는 반복문입니다.
// let arr2 = ["banana", "apple", "orange"];
// let obj2 = { name: "철수", age: 20 };

// for (let index in arr2) {
//   console.log(index);
// }

// //[연습문제 - 1부터 9까지 출력하기]
// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }
/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/

const numArr = [10, -10, 20, -30, 40];

let sum = 0;
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i] < 0) continue;
  sum += numArr[i];
}
console.log(sum);

// [연습문제 - 홀짝 구분하기]

// 0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
// 구분하여 출력하도록 코드를 작성해주세요.
// 0 짝수
// 1 홀수
// 2 짝수
// 3 홀수
// 4 짝수
// 15 홀수

// for (let i = 1; i < 16; i++) {
//   if (i % 2 === 0) {
//     console.log(`i는 현재${i}값: 짝수`);
//   } else {
//     console.log(`i는 현재${i}값: 홀수`);
//   }
// }
let result = [];
// for (let i = 100; i < 1000; i++) {
//   let stringNumber = i.toString();
//   let digitsArray = stringNumber.split("");
//   let foo = 0;
//   for (let j = 0; j < digitsArray.length; j++) {
//     foo += digitsArray[j] * digitsArray[j] * digitsArray[j];
//   }
//   if (foo === i) {
//     result.push(i);
//   }
// }

let foo = 0;
// 암스트롱 수 구하기 문제
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      const sun = i * i * i + j * j * j + k * k * k;
      const origin = i * 100 + j * 10 + k;
      if (sun === origin) {
        console.log(sun);
      }
    }
  }
}
