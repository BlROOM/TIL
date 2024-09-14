// https://school.programmers.co.kr/learn/courses/30/lessons/134240
// 다른사람 풀이
// function solution(food) {
//   var answer = "";
//   let arr = [];

//   food.map((f, i) => {
//     f = f % 2 == 0 ? f : f - 1;
//     for (let j = 0; j < f / 2; j++) {
//       arr.push(i);
//     }
//   });

//   answer = arr.join("") + 0 + arr.reverse().join("");

//   return answer;
// }

function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}

console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //("111303111");
