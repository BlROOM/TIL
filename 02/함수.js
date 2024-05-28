// function func1() {
//   console.log("func1 입니다.");
// }

// func1();
// Cannot access 'hello3' before initialization
// hello3();

// const hello = function func2() {
//   console.log("반갑습니다");
// };

// const hello2 = function () {
//   console.log("반갑습니다");
// };

// const hello3 = () => {
//   console.log("반갑습니다");
// };

// hello();
// hello2();

// function sum(num1, num2) {
//   let result = 0;
//   console.dir(arguments);
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   return result;
// }

// Q1 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
function allPlus(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += arguments[i];
  }
  return result;
}

// Q2사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.
function calculatHow(symbol, num1, num2) {
  switch (symbol) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
  }
}

const studentA = {
  math: "A+",
  korean: "B",
  english: "C+",
  science: "F",
};

// Q3
function checkScore(alpha) {
  switch (alpha) {
    case "A+":
      return 4.5;
    case "A":
      return 4;
    case "B+":
      return 3.5;
    case "B":
      return 3;
    case "C+":
      return 2.5;
    case "C":
      return 2;
    case "F":
      return 1;
  }
}

function calculateAverage(calValue, devideNum) {
  return calValue / devideNum;
}

function calculateScore(score) {
  let result = 0;
  let count = 0;
  for (let key in score) {
    result += checkScore(studentA[key]);
    count += 1;
  }
  return calculateAverage(result, count);
}

//Q4 문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수를 만들어주세요.
const i = "aaabbbccc";
const o = "a3b3c3";

const i2 = "aabbaa";
const o2 = "a2b2a2";

function checkIsSameStr(currStr, str) {
  return currStr === str;
}
function compressString(str) {
  let result = "";
  let currStr = str[0];
  let currNum = 1;
  for (let i = 1; i <= strArr.length; i++) {
    if (checkIsSameStr(currStr, str[i])) {
      currNum += 1;
    } else {
      result += currStr + currNum;
      currNum = 1;
      currStr = str[i];
    }
  }
  return result;
}

// console.log(strNumbering(i));
// console.log(compressString(i));
