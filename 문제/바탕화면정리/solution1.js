// https://school.programmers.co.kr/learn/courses/30/lessons/161990?language=javascript

//연습문제 3번째 하트 문양에서 오류발생
function solution(wallpaper) {
  const empty = "";
  const full = "#";
  const drag = [];

  for (let i = 0; i < wallpaper.length; i++) {
    const foo = [...wallpaper[i]];
    console.log(foo, i);
    for (let j = 0; j < foo.length; j++) {
      if (foo[j] === full) {
        drag.push([i, j]);
      }
    }
  }
  console.log(drag, "Drag");
  let dotMin = drag[0];
  let dotMax = drag[0];
  let firstDotMax = drag[0][1];
  for (let i = 1; i < drag.length; i++) {
    if (drag[i][0] < dotMin[0] && drag[i][1] < dotMin[1]) {
      dotMin = drag[i];
    }
    if (drag[i][0] > dotMin[0] && drag[i][1] > dotMin[1]) {
      dotMax = drag[i];
    }
    console.log(dotMin, drag[i]);
    console.log(dotMax, drag[i]);
  }
  dotMax[0] += 1;
  dotMax[1] += 1;
  const answer = [...dotMin, ...dotMax].sort();
  //   const answer = [];
  return answer;
}

// 드래그는 바탕화면의 격자점 S(lux, luy)를 마우스 왼쪽
// 버튼으로 클릭한 상태로 격자점 E(rdx, rdy)로 이동한 뒤 마우스 왼쪽 버튼을 떼는 행동입니다.
//  이때, "점 S에서 점 E로 드래그한다"고 표현하고 점 S와 점 E를 각각 드래그의 시작점,
//  끝점이라고 표현합니다.

// 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때,
// "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의합니다.

// wallpaper	result
// console.log(solution([".#...", "..#..", "...#."])); //[0, 1, 3, 4]
// console.log(
//   solution([
//     "..........",
//     ".....#....",
//     "......##..",
//     "...##.....",
//     "....#.....",
//   ])
// ); //[(1, 3, 5, 8)];
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); //[0, 0, 7, 9]

//   ("..........", ".....#....", "......##..", "...##.....", "....#.....")
// ][
//   (".##...##.",
//   "#..#.#..#",
//   "#...#...#",
//   ".#.....#.",
//   "..#...#..",
//   "...#.#...",
//   "....#....")
// ][(0, 0, 7, 9)][("..", "#.")][(1, 0, 2, 1)];
