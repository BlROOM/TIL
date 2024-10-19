// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const date = today.split(".");
  const answer = [];

  for (let i = 0; i < privacies.length; i++) {
    const curretnDate = privacies[i].split(".");
    if (Number(curretnDate[0]) < Number(date[0])) {
      answer.push(i);
      continue;
    }

    console.log("curretnDate", curretnDate);
    const trem = terms.find(
      (item) => item[0] === curretnDate[2].charAt(curretnDate[2].length - 1)
    );
    console.log(trem, "term");

    // console.log(privacies[i][privacies[i].length - 1]);
    // for (let j = 0; j < privacies.length; j++) {
    //   const currentDate =
    // }

    // answer.push(i);
  }

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); //	[1, 3]

// console.log(
//   solution(
//     "2020.01.01",
//     [("Z 3", "D 5")],
//     [
//       ("2019.01.01 D",
//       "2019.11.15 Z",
//       "2019.08.02 D",
//       "2019.07.01 D",
//       "2018.12.28 Z"),
//     ]
//   )
// );

// [1, 4, 5]
