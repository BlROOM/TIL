//pending (대기) //비동기 초기에는 대기상태
//resolve (이행) // resolve 가  실행되어 무사히 완료되면 fullfiled 값으로 변한다
//reject (거부) // resolve 가 실행되는 와중에 오류가 발생하거나 비동기 동작중 문제 발생시 reject가 발생
// reject가 발생시 래퍼런스 에러가 발생

// promise에 이행상태가되면 then이라는 메소드를 실행시킨다

const promise = new Promise((resolve, reject) => {
  console.log("promise", resolve, reject);
  setTimeout(() => {
    // console.log("resolve ");
    // resolve();
    // resolve(new Error("에러 발생"));
    reject(new Error("에러 발생"));
  }, 2000);
});

console.log(promise);
setTimeout(() => {
  console.log(promise);
}, 5000);

promise
  // promise에서 resolve 호출시 처리하는 구절 then
  .then(data => {
    console.log("task", data);
  })
  // promise에서 reject가 호출시 처리하는 구절 catch
  .catch(err => {
    console.log(err);
  })
  // resolve, reject와 상관없이 무조건 실행되는 구절 finally
  .finally(() => {});

function delay(ms, value) {
  return new Promise(resolve => setTimeout(() => resolve(value), ms));
}

async function getApple() {
  // throw new Error("error");
  await delay(2000); // delay 1s
  return "🍎";
}

async function getBanana() {
  await delay(4000); // delay 1s
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();

  console.log(applePromise);
  const apple = await applePromise;
  const banana = await bananaPromise;

  // Promise.all((getApple(), getBanana()));

  // getBanana().then((apple) => console.log(apple));
}
pickFruits();
