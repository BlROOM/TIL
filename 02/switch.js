// const area = "서울";

// switch (area) {
//   case "서울":
//     console.log("서울입니다.");
//     break;
//   case "경기":
//     console.log("경기입니다.");
// break;

//   case "제주":
//     console.log("제주입니다.");
// break;

//   default:
//     console.log("서울, 경기, 제주 입니다.");
//     break;
// }
// const priceSeoul = 5000;
// const priceJeju = 10000;
// const priceGyengki = 3000;

// if (area === "서울") {
//   console.log("서울입니다.");
// } else if (area === "경기") {
//   console.log("경기입니다.");
// } else if (area === "제주") {
//   console.log("제주입니다.");
// } else {
//   console.log("서울, 경기, 제주 입니다.");
// }

const area = "제주";
let price;
switch (area) {
  case "서울":
    price = 5000;
    console.log(price, "서울입니다.");
    break;
  case "경기":
    price = 3000;
    console.log(price, "경기입니다.");
    break;

  case "제주":
    price = 10000;
    console.log(price, "제주입니다.");
    break;
  default:
    price = 10000;
    console.log(price, "서울, 경기, 제주 입니다.");
    break;
}

if (area === "서울" || area === "경기") {
  price = 3000;
  console.log(price, "서울입니다.");
} else if (area === "제주") {
  price = 10000;
  console.log(price, "경기입니다.");
} else {
  price = 5000;
  console.log(price, "서울, 경기, 제주 입니다.");
}

/*
[연습문제 - 학점 계산기]

학생의 점수를 저장하는 score 변수의 값에 따라  
학점을 출력하는 코드를 작성해주세요.back

1. score의 점수가 90점 이상이면 A
2. score의 점수가 80점 이상이면 B
3. score의 점수가 70점 이상이면 C
4. score의 점수가 60점 이상이면 D
5. score의 점수가 60점 미만이면 F
*/

const score = 90;
let result;
//  swtich문은 score 는 상수로써 소괄호안에서 true로 인식됨
// 이 문제에서 사용할 수 없음!
// switch (score) {
//   case score >= 90:
//     result = "A";
//     break;
//   case score >= 80:
//     result = "B";
//     break;
//   case score >= 70:
//     result = "C";
//     break;
//   case score >= 60:
//     result = "D";
//     break;
//   default:
//     result = "F";
// }

if (score >= 90) {
  result = "A";
} else if (score >= 80) {
  result = "B";
} else if (score >= 70) {
  result = "C";
} else if (score >= 60) {
  result = "D";
} else {
  result = "F";
}

console.log(score, result);
