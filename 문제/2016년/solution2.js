function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  // 각 월의 일수 (2016년은 윤년이므로 2월이 29일입니다)
  const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // 1월 1일부터 a월 b일까지의 총 일수를 계산
  let totalDays = b; // 해당 월의 일수 추가
  for (let i = 0; i < a - 1; i++) {
    totalDays += daysInMonth[i];
  }

  // 7일 단위로 나눈 나머지를 사용하여 요일 계산
  const dayIndex = (totalDays - 1) % 7; // 인덱스는 0부터 시작하므로 -1

  return week[dayIndex];
}
