function solution(number, limit, power) {
  //  제곱근 방식
  let totalWeight = 0;

  for (let i = 1; i <= number; i++) {
    let divisorCount = 0;
    const sqrt = Math.sqrt(i);

    // 제곱근을 이용한 약수 개수 계산
    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        divisorCount++;
        if (j !== i / j) {
          divisorCount++; // j와 i / j가 다르면 두 개의 약수
        }
      }
    }

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
