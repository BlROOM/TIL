// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
  const answer = [-1];
  const str = [];
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      str.push(s[i]);
      continue;
    }
    const isIncluded = str.includes(s[i]);

    if (!isIncluded) {
      answer.push(-1);
    } else {
      const idx = s.indexOf(s[i]);
      const findIdx = str.findLastIndex((item) => item === s[i]);

      answer.push(i - findIdx);
      console.log(findIdx, `${i}번째`, s[i], str, idx);
    }
    console.log(`${i}번째`, s[i], str);
    str.push(s[i]);
  }
  return answer;
}

console.log(solution("banana")); //[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); //[(-1, -1, 1, -1, -1, -1)];
