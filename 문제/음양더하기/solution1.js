// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let answer = 0;
  console.log(absolutes);
  for (let i = 0; i < absolutes.length; i++) {
    const current = signs[i] ? absolutes[i] : -absolutes[i];
    console.log(current);
    answer += current;
  }
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); //	9
// console.log(solution([1, 2, 3], [(false, false, true)])); // 0	0
