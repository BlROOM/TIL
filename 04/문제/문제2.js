// Q2.
// 전화 번호 형식으로 해당 숫자의 문자열을 반환하는 10 개의 정수 배열 (0과 9 사이)을 허용하는 함수를 작성하십시오.

// createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // =>는 "(123) 456-7890"을 반환합니다.
// 반환되는 형식(포맷)을 위에서 제시한 형태처럼 정확하게 일치시켜주세요.
function createPhoneNumber(numbers) {
  let answer = "";
  for (let i = 0; i < numbers.length; i++) {
    switch (i) {
      case 0:
        console.log(i, answer);
        answer += "(";
        break;
      case 3:
        console.log(i, answer);
        answer += ")";
        answer += " ";
        break;
      case 6:
        console.log(i, answer);
        answer += "-";
        break;
    }
    answer += numbers[i];
  }
  return answer;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
