// https://school.programmers.co.kr/learn/courses/30/lessons/135808
// 성공
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  console.log(score);
  const boxScore = [];

  for (let i = 0; i < score.length; i++) {
    boxScore.push(score[i]);
    if (i && (i + 1) % m === 0) {
      const min = Math.min(...boxScore);
      answer += min * m;
      console.log(boxScore, answer, min);
      boxScore.splice(0);
      //   current += 1;
    }
  }
  return answer;
}

// console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); //8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); //33
