// 'a' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.ts(7006)
function sum(a: number, b: number): number {
  // 함수에 들어오는 인자들에 타입일 지정해줘야하며
  // return의 타입도 지정할 수 있다.
  return a + b;
}

const result = sum(100, 20);

console.log(result); //.을 통해 reulst값에 사용할 수 있는 인스턴스 메소드 목록이 뜬다.
