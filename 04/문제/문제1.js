// Q.1 두 개의 정수(a, b)를 취하는 함수를 완성하고 입력 매개변수를 포함하여 입력 매개 변수
// 사의의 모든 정수 배열을 반환하게 하세요.
//  이때 매개변수 b는 a보다 크다고 가정합니다.

function solution(a, b) {
  const answer = [];
  for (let i = a; i <= b; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(1, 4));
console.log(solution(5, 10));
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]

// a = 5
// b = 10
// --> [5, 6, 7, 8, 9, 10]

// Q.1 두 개의 정수(a, b)를 취하는 함수를 완성하고 입력 매개변수를 포함하여 입력 매개 변수
// 사의의 모든 정수 배열을 반환하게 하세요.
// 두 개의 정수(a, b)를 취하는 함수를 완성하고 입력 매개변수를 포함하여 입력 매개 변수 사의의 모든 정수 배열을 반환하게 하세요.
//  단, a 와 b의 크기 상관 관계는 정해진 게 없다.

function solution(a, b) {
  const answer = [];
  let c;
  if (a > b) {
    c = a;
    a = b;
    b = c;
  }
  for (let i = a; i <= b; i++) {
    answer.push(i);
  }
  return answer;
}

console.log(solution(1, 4));
console.log(solution(5, 10));
console.log(solution(13, 2));
