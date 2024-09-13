function solution(a, b, n) {
  let answer = 0;

  let bottles = 0;
  while (n >= a) {
    bottles = n % a;
    n = Math.floor(n / a) * b;

    answer += n;

    n += bottles;
  }

  return Math.floor(answer);
}

console.log(solution(2, 1, 20)); // 19
console.log(solution(3, 1, 20)); // 9
