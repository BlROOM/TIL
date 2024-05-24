// 삼항 연산자
// 세개의 피연산자를 이용해서 비교하는 연산자입니다.
// 피연산 1이 참이면 피연산자 2를 실행하고 거짓이면 피연산자 3을 실행
// 무조건 논리적인 판단 boolean

//  피연산 1 ? 피연산자2 : 피연산자3

const money = 3000;
const price = 5000;
const result = money > price ? "돈이 부족합니다" : "물건을 구매하겠습니까?";

console.log(result);

// or 연산자 활용법
const a = "" || "default value";
// '' 빈문자열을 false로 인식하여 "default value" 값이 들어가게하기
