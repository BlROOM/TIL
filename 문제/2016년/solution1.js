// https://school.programmers.co.kr/learn/courses/30/lessons/12901
// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	실패 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	실패 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.5MB)
// 테스트 11 〉	실패 (0.10ms, 33.4MB)
// 테스트 12 〉	실패 (0.06ms, 33.4MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)
// 테스트 14 〉	실패 (0.09ms, 33.5MB)
// 2016년 1월 1일은 금요일입니다.
//  2016년 a월 b일은 무슨 요일일까요?
//  두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수,
//  solution을 완성하세요.
//  요일의 이름은 일요일부터 토요일까지 각각
//  SUN,MON,TUE,WED,THU,FRI,SAT
// a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
function solution(a, b) {
  // 2016년 1월 1일은 금요일입니다
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const monthWeek = [
    "FRI",
    "MON",
    "TUE",
    "FRI",
    "SUN",
    "WED",
    "FRI",
    "MON",
    "THU",
    "SAT",
    "TUE",
    "THU",
  ];
  const dayNumber = b % week.length;
  const findIdx = week.findIndex((item) => item === monthWeek[a - 1]);
  console.log(findIdx + dayNumber);
  console.log(dayNumber);
  const dayIndex =
    findIdx + dayNumber > week.length
      ? week.length - (week.length - (findIdx + dayNumber))
      : findIdx + dayNumber;
  console.log("dayIndex", dayIndex);
  console.log(week[dayIndex]);
  return week[dayIndex - 1 === -1 ? 6 : dayIndex - 1];
}

console.log(solution(5, 24)); //"TUE"
console.log(solution(5, 28)); //"TUE"
