// 여러개의 데이터를 하나로 묶어서 표현하고 인덱스 번호로 접근하는
// 자바스크립트 자료형은?

// - [ ]  숫자형
// - [ ]  배열
// - [ ]  객체
//  ---- 배열

// . 아래의 코드에서 잘못된 부분을 수정하시오
// var obj = {
//   name: "철수",
//   age: 20,
//   gender: "male",
// };

const obj = {
  name: "철수",
  age: 20,
  gender: "male",
};

// 다음 중 산술 연산자가 아닌 것을 고르세요.

// - [ ]  +
// - [ ]  -
// - [ ]  *
// - [ ]  =
// - [ ]  %

// ---- = 대입연산자
// 다음중 연산자와 이름이 잘못 적어진 것을 고르세요.

// - [ ]  % 나누기 연산자
// - [ ]  * 곱셈연산자
// - [ ]  <= 크거나 같다
// - [ ]  == 같다
// - [ ]  ++ 증감연산자

// == 같다 --- 암묵적 타입변환후 비교 동등비교 땡
// 나누기 연산자 => 나머지연산자임

// 아래의 코드의 실행 결과를 예측하세요.
// const myLevel = 99;
// const status = myLevel >= 99 ? '축하합니다. 만렙입니다' : '';

// console.log(status); //축하합니다. 만렙입니다

// 아래 코드의 실행 결과를 예측하세요
// console.log(10 == "10"); // ?? true
// console.log(10 === "10"); // ?? false
// console.log(10 * "20"); // ?? 200
// console.log(10 * 20); // ?? 200

//let score = score + 10;

// score += 10;
// score ++= 10;
// score =+10;
// score + 10 = 10;

// --- score += 10;

// 아래의 실행 결과를 고르세요
// const result = 10 + 2 * 10;

// - [ ]  120
// - [ ]  30
// - [ ]  42
// - [ ]  118

// --- 30

// 삼항 연산자 활용
// 1. 변수 **`num`**을 선언하고 어떤 숫자를 할당하세요.
// 2. **`num`**이 짝수인지 홀수인지 판별하는
// 삼항 연산자를 사용하여 결과를 **`isEven`**
// 변수에 저장하고 콘솔에 출력하세요.

const num = 30;
const isEven = num % 2 === 0 ? "짝수" : "홀수";

console.log(isEven);
