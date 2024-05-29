// 'a' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.ts(7006)
function sum(a, b) {
  // 함수에 들어오는 인자들에 타입일 지정해줘야하며
  // return의 타입도 지정할 수 있다.
  return a + b;
}

const result = sum(100, 20);

console.log(result);
