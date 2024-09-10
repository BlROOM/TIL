// https://school.programmers.co.kr/learn/courses/30/lessons/136798
// 테스트 11 〉	실패 (시간 초과)
// 테스트 12 〉	실패 (시간 초과)
// 테스트 13 〉	실패 (시간 초과)
// 테스트 14 〉	실패 (시간 초과)
// 테스트 15 〉	실패 (시간 초과)
// 테스트 16 〉	실패 (시간 초과)
// 테스트 18 〉	실패 (시간 초과)
// 테스트 24 〉	실패 (시간 초과)
// 테스트 25 〉	실패 (시간 초과)
function solution(number, limit, power) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    let devider = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) {
        devider += 1;
      }
    }
    if (devider > limit) devider = power;
    answer += devider;
  }

  return answer;
}

console.log(solution(5, 3, 2)); //10
console.log(solution(10, 3, 2)); //21
