// https://school.programmers.co.kr/learn/courses/30/lessons/132267
// 실패
function solution(a, b, n) {
  // 콜라 빈 병 2개를 가져다주면 콜라 1병을 주는 마트가 있다.
  // 빈 병 20개를 가져다주면 몇 병을 받을 수 있는가?

  // 단, 보유 중인 빈 병이 2개 미만이면, 콜라를 받을 수 없다
  let answer = 0;
  //   let bottle = n;
  while (n > a) {
    // const devide = n - a !== 0 && n - a;
    n = n / a;
    console.log(n);
    answer += n * b;
    console.log("answer:", answer, "n:", n, "받은:", n * b);
  }
  return Math.ceil(answer);
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
