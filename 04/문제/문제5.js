// Q5.어떤 숫자 n을 전달받아 n이 양의 정수 x의 제곱근인지 판별하고 제곱근이라면
// 양의 정수 x + 1 의 제곱근을 반환하는 함수를 만들려고합니다.
// 만약 전달된 임의의 수 n이 어떠한 수의 제곱근이 아니라면 -1을 반환하게 하세요.
// 이때 임의의 정수는 1 이상 50000000 이하라고 가정합니다.

function isPow(num) {
  for (let i = 2; i < num; i++) {
    const squrt = i * i;
    if (squrt === num) {
      const plusSqurt = i + 1;
      return plusSqurt * plusSqurt;
    }
    if (squrt > num) {
      return -1;
    }
  }
}

const result = isPow(121); // 144
const result2 = isPow(10); // -1
const result3 = isPow(9); // 16

console.log(result2);
console.log(result);
console.log(result3);
// > n 121 -> return 144
// > n 9 -> return 16
// > n 10 -> return -1
