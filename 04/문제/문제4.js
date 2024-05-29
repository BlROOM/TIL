// Q4
// 함수에 배열로 숫자를 전달해서 가장 작은 2개의 숫자의 합을 반환하는 함수를 만들어보세요
function sumTwoSmallestNumbers(numbers) {
  let answer = 0;
  for (let i = 0; i < 2; i++) {
    numbers.sort();
    answer += numbers[0];
    numbers.shift();
  }
  return answer;
}
const sum = sumTwoSmallestNumbers([10, 50, 20, 30, 40]); // 30 (가장 작은 수 10 + 20)
const sum2 = sumTwoSmallestNumbers([10, 50, 0, 30, 40]); // 10 (가장 작은 수 10 + 0)
console.log(sum);
console.log(sum2);
