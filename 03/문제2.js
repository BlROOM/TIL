//   [가장 긴 단어를 출력하기]
//   매개변수로 전달된 문장에서 가장 긴 단어를 출력해주세요.

// function findLongStr(str) {
//   const strArr = str.split(" ");
//   let strIdx = 0;
//   let strLength = 0;
//   strArr.map((item, idx) => {
//     if (strLength < item.length) {
//       strLength = item.length;
//       strIdx = idx;
//     }
//   });
//   return strArr[strIdx];
// }

// function findLongStr(str) {
//   const strArr = str.split(" ");
//   const result = strArr.reduce((x, y) => {
//     if (x.length < y.length) {
//       return y;
//     } else {
//       return x;
//     }
//   });
//   return result;
// }

// function findLongStr(str) {
//   let arr = str.split(" ");
//   let longStr = "";
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longStr.length) {
//       longStr = arr[i];
//     }
//   }
//   return longStr;
// }

function findLongStr(str) {
  const result = str
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .shift();
  return result;
}

let result = findLongStr("we are the champion");
console.log(result); // champion

let result2 = findLongStr("i`m fine thank you, and you?");
console.log(result2); // thank
