// // 매개변수가 하나일때는 소괄호 생략가능
// // 중괄호 생략시에는 return 문이 자동으로 들어감
// const task1 = callback => {
//   return new Promise((resolve, reject) => {
//     console.log("task1");
//     resolve();
//   });
//   // console.log("task1");
//   // setTimeout(() => {
//   //   callback();
//   // }, 1000);
// };

// const task2 = callback => {
//   // console.log("task2");
//   // setTimeout(() => {
//   //   callback();
//   // }, 1000);
//   return new Promise((resolve, reject) => {
//     // console.log("task2");
//     setTimeout(() => {
//       console.log("지연 완료");
//       reject("task2 error");
//     }, 3000);
//     // resolve();
//   });
// };
// const task3 = callback => {
//   // console.log("task3");
//   // setTimeout(() => {
//   //   callback();
//   // }, 1000);
//   return new Promise((resolve, reject) => {
//     console.log("task3");
//     resolve();
//   });
// };
// const task4 = callback => {
//   // console.log("task4");
//   // callback();
//   return new Promise((resolve, reject) => {
//     console.log("task4");
//     resolve();
//   });
// };

// // task1(() => {
// //   task2(() => {
// //     task3(() => {
// //       task4(() => {
// //         console.log("모든작업끝남");
// //       });
// //     });
// //   });
// // });

// // task1().then(() => {
// //   console.log("task1 done");
// //   task2().then(() => {
// //     console.log("task2 done");
// //     task3().then(() => {
// //       console.log("task3 done");
// //       task4().then(() => {
// //         console.log("task4 done");
// //       });
// //     });
// //   });
// // });

// // 위에 코드와 실행 동작은 동일하지만 이런식으로 가독성있게 작성할 수 있다.
// // task1()
// //   .then(() => task2())
// //   .then(() => task3())
// //   .then(() => task4())
// //   .then(() => console.log())
// //   .catch(error => console.error(error));

// // const taskPromise = new Promise((resolve, reject) => {
// //   console.log("task1");
// //   resolve();
// // });

// console.log(typeof null);

// const undefined = "eqeqweqw";
// console.log(undefined); //eqeqweqw

// const null = '';
