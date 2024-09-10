// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

function solution(cards1, cards2, goal) {
  const result = [];
  for (let i = 0; i < goal.length; i++) {
    const find1 = cards1[0] === goal[i];
    console.log(i, "번째 cards1", cards1, find1, cards1[0], goal[i]);

    if (find1) {
      result.push(cards1[0]);
      cards1.shift();
      console.log(i, "번째 find1", find1, goal, result, cards1);
      continue;
    }

    const find2 = cards2[0] === goal[i];
    console.log(i, "번째 cards2", cards2, find2, cards2[0], goal[i]);
    if (find2) {
      result.push(cards2[0]);
      cards2.shift();
      console.log(i, "번째 find2", find2, goal[i], result);
    }
    if (!find1 && !find2) break;
  }
  const answer = result.join("") === goal.join("");
  return answer ? "Yes" : "No";
}

// console.log(
//   // solution(
//   //   ["i", "drink", "water"],
//   //   ["want", "to"],
//   //   ["i", "want", "to", "drink", "water"]
//   // )
// ); // "Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
);
//"No";
