//Q3. 전달하는 문자열의 역순을 취하는 함수 reverseMessage를 구현해주세요.
// "Good Bye" -> "eyB dooG"
// "Hello" -> "olleH"

function reverseMessage(str) {
  return [...str].reverse().join("");
}

console.log(reverseMessage("Good Bye"));
console.log(reverseMessage("Hello"));
