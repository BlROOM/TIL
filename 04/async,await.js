// function getApple() {
//   return new Promise((resolve, reject) => {
//     resolve("apple");
//   });
// }

// async 를 함수에 붙이면 내부적으로 promise를 반환하는 것과 동일
async function getApple() {
  // return new Promise((resolve, reject) => {
  //   resolve("apple");
  // });
  // throw new Error("에러 발생");
  // await delay(1000);
  return "apple";
}

async function getBanana() {
  return "banana";
}

async function pickFruits() {
  // 사과를 호출후 순차적으로 바나나를 호출하고싶다면
  // getAplle 호출이후 then 구문후에 넣어야함
  // 이러면 결국 프로미스 지옥
  // getApple()
  //   .then(data => {
  //     console.log(data);
  //     getBnana().then(data => {
  //       console.log(data);
  //     });
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // 이때 async, await 키워드를 통해 가독성을 해결할수있다
  // const apple = await getApple();
  // const banana = await getBnana();
  const promiseApple = getApple();
  const promiseBanana = getBanana();
  const apple = await promiseApple;
  const banana = await promiseBanana;
  // Promise.all 을 사용하면 async로 처리되어있는 함수들을 병렬처리할 수 있다.
  const [appleValue, bananaValue] = await Promise.all([
    getApple(),
    getBanana(),
  ]);
  console.log(appleValue);
  console.log(bananaValue);
}

pickFruits();
