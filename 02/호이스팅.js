console.log(speak);
speak3();
speak4();
// console.log(speak2);
var speak = "안녕하세요";
// ReferenceError: Cannot access 'speak2' before initialization
// const speak2 = "안녕하세요";

function speak3() {
  console.log("안녕하세요");
}
// Cannot access 'speak4' before initialization
const speak4 = function () {
  console.log("안녕하세요");
};
