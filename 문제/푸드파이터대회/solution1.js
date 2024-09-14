// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  const foodArr = [];
  const answer = [];
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      console.log();
      foodArr.push(i);
    }
  }
  answer.push(...foodArr);
  answer.push(0);
  answer.push(...foodArr.reverse());
  return answer.join("");
}

console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //("111303111");
