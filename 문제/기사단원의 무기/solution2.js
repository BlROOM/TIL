function solution(number, limit, power) {
  // 제곱수로 확인하기
  let totalWeight = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = 0;

    // 약수 개수 계산
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (j * j === i) {
          divisorCount++; // 제곱수의 경우 한 번만 카운트
        } else {
          divisorCount += 2; // 쌍을 이루는 약수들
        }
      }
    }

    // 만약 j가 i의 약수라면, i를 j로 나누었을 때의 결과인 i / j도 i의 약수입니다.
    // 이유는 i % j === 0이면 i = j * (i / j)이기 때문에 i / j 또한 i를 나누는 약수입니다.
    // 예를 들어, i = 36일 때:
    // j = 2라면 36 / 2 = 18이므로, 36의 약수는 2와 18입니다.
    // j = 3라면 36 / 3 = 12이므로, 36의 약수는 3과 12입니다.
    // j = 6라면 36 / 6 = 6이므로, 36의 약수는 6과 6입니다 (여기서 제곱수의 경우).

    // 제한 수치 초과 시 공격력 조정
    if (divisorCount > limit) {
      divisorCount = power;
    }

    totalWeight += divisorCount;
  }

  return totalWeight;
}

// 예제 실행
const number = 5;
const limit = 3;
const power = 2;
console.log(solution(number, limit, power)); // 출력: 10
