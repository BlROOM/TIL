// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
  const answer = [];
  const str = [];
  for (let i = 0; i < s.length; i++) {
    const find = str.find((item) => item === str[i]);
    console.log(find, "find");
    if (!find) {
      str.push(s[i]);
    }
    const findIdx = str.findIndex((item) => item === str[i]);
    if (i === findIdx) {
      answer.push(-1);
    } else {
      answer.push(findIdx - i);
    }
    console.log(findIdx, `${i}번째`, s[i]);
  }
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
// console.log(solution("foobar")); //[(-1, -1, 1, -1, -1, -1)];
