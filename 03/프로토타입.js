// // function MakeAnimalObject() {
// //   this.animalName = "곰";
// //   this.animalType = "고양이";
// //   this.animalAge = 8;
// //   this.animalGender = "male";
// //   this.lastVisit = "2023-08-11";
// //   this.getLastMedical = function () {
// //     return (
// //       this.animalName + "는 " + this.lastVisit + "에 마지막으로 진료받았습니다."
// //     );
// //   };
// // }

// // let animal1 = new MakeAnimalObject();
// // let animal2 = new MakeAnimalObject();

// // console.log(animal1 == animal2); // false;
// // console.log(animal1 === animal2); // false;

// // console.log(animal1.__proto__ == animal2.__proto__); // true;
// // console.log(animal1.__proto__ === animal2.__proto__); // true;

// function AnimalMedicalRecord(params) {
//   this.animalName = params?.animalName ? params.animalName : "no-data";
//   this.animalAge = params?.animalAge ? params.animalAge : "no-data";
//   this.animalGender = params?.animalGender ? params.animalGender : "no-data";
//   this.lastMedicalDate = null;
//   this.startMedical = function () {
//     const startTime = this.getCurrentTime();
//     this.lastMedicalDate = startTime;
//     console.log(`[${startTime}] 진료가 시작되었습니다.`);
//   };
//   this.saveMedical = function () {
//     const saveData = {
//       animalName: this.animalName,
//       animalAge: this.animalAge,
//       animalGender: this.animalGender,
//       lastMedicalDate: this.lastMedicalDate,
//     };
//     console.log("save 되었습니다.");
//     console.log(saveData);
//   };
//   this.getCurrentTime = function () {
//     const date = new Date();
//     return `${date.getFullYear()}.${
//       date.getMonth() + 1 < 10
//         ? "0" + (date.getMonth() + 1)
//         : date.getMonth() + 1
//     }.${
//       date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
//     } ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//   };
// }

// function loadData(search) {
//   if (search === "뽀삐") {
//     return {
//       animalName: "뽀삐",
//       animalAge: 9,
//       animalGender: "male",
//     };
//   } else if (search === "곰이") {
//     return {
//       animalName: "곰이",
//       animalAge: 9,
//       animalGender: "male",
//     };
//   }
// }
// AnimalMedicalRecord.prototype.getName = function () {
//   console.log(this.animalName);
// };
// const client = new AnimalMedicalRecord(loadData(""));
// client.startMedical();
// client.saveMedical();
// client.getName();

// console.log(AnimalMedicalRecord.prototype.__proto__);

// 기존 Math.random 함수를 저장합니다.
// const originalMathRandom = Math.random;

// // Math.random 함수를 덮어씁니다.
// Math.random = function () {
//   return 0.5;
// };

// // 덮어쓴 Math.random 함수를 테스트합니다.
// console.log(Math.random()); // 항상 0.5를 반환합니다.

// // 원래의 Math.random 함수를 복원합니다.
// Math.random = originalMathRandom;

// // 복원된 Math.random 함수를 테스트합니다.
// console.log(Math.random()); // 원래의 난수 생성 기능을 수행합니다.

const customCeil = Math.ceil();

Math.ceil = function () {
  return console.log("error");
};

console.log(Math.ceil());
console.dir(Math.ceil);
