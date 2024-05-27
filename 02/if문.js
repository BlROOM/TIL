// if(논리형 데이터){
//     //논리형 데이터가 참(true)이면 실행
//   }else{
//     //논리형 데이터가 거짓(true)이면 실행
//   }

//키워드와 식별자를 함께 쓴게 선언문
// 값을 할당하는 부분이 할당문
let lamp = true;
if (lamp === true) {
  console.log("The lamp is on");
}
// 0, ''(빈 문자열), -(음수) false 값임
if (lamp === false) {
  console.log("The lamp is off");
}

if (lamp === false) {
  console.log("The lamp is off");
} else {
  console.log("The lamp is on");
}

if (lamp === false) {
  console.log("The lamp is off");
} else if (lamp === true) {
  console.log("The lamp is on");
}

const foo = 10;

if (foo % 2 === 0) {
  console.log("짝수입니다.");
} else if (foo % 2 !== 0) {
  console.log("홀수입니다.");
}

const msg = foo % 2 === 0 ? "짝수입니다" : "홀수입니다";
console.log(msg);
