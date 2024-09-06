// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

//실패
function solution(cards1, cards2, goal) {
  const result = [];
  let flag = false;

  for (let i = 0; i < goal.length; i++) {
    const find1 = cards1.find((item) => goal[i] === item);
    if (find1) {
      goal = goal.filter((item) => find1 !== item);
      result.push(find1);
      console.log(find1, i, "번째", goal);
      flag = true;
      continue;
    }
    const find2 = cards2.find((item) => goal[i] === item);
    if (find2) {
      goal = goal.filter((item) => find2 !== item);
      result.push(find2);
      flag = false;
      console.log(find2, i, "번째", goal);
      continue;
    }
    console.log(i, "번째", goal, result);
    break;
  }

  return goal.length < 1 ? "YES" : "NO";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); // "Yes"

// console.log(
//   solution(
//     ["i", "water", "drink"],
//     ["want", "to"],
//     ["i", "want", "to", "drink", "water"]
//   )
// );
//"No";
