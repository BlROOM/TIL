// https://school.programmers.co.kr/learn/courses/30/lessons/132267
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    if (n % a === 0) {
      n = n / a;
      answer += n * b;
    } else {
      const rest = n % a;
      n = (n - rest) / a;
      answer += n * b;
      n += rest;
      console.log("소수점:", answer, "n:", n, "받은:", rest, n);
    }
    console.log(n);
    console.log("answer:", answer, "n:", n, "받은:", n * b);
  }
  return answer;
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
