// [문제]
// 매개변수로 숫자를 전달하면 그 숫자의 역순을 되돌려주는
// 함수를 만들어주세요.

// ex) 32125 -> 52123
//     15231 -> 13251
// */

// function reverse_to_number(number) {
//   return [...String(number)].reverse().join("");
// }

function reverse_to_number(number) {
  const strName = number.toString();
  console.log("strName", strName);
  const strArr = strName.split("");
  console.log("strArr", strArr);

  const reverseArr = strArr.reverse();
  console.log("reverse", reverseArr);

  const revrseStr = reverseArr.join("");
  console.log("reverseStr", revrseStr);

  // return Number(revrseStr);
  return parseInt(revrseStr);
}

let a = reverse_to_number(32125);
console.log(a); // 52123

let b = reverse_to_number(13251);
console.log(b); // 15231
