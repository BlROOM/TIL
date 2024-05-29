### DOM 에 접근하여 해당 태그에 style을 가져오지 못함

- allPEl.forEach(pEl => {
  // console.log(pEl, "객체요");
  pEl.addEventListener("click", function () {
  if (pEl.style.display === "block") {
  // console.log(pEl.style.display);
  pEl.style.display = "none";
  } else {
  // console.log(pEl.style.display);
  pEl.style.display = "block";
  }
  });
  });

- 해당 코드에서 조건문을 통해 태그에 style 값에 따른 조건문을 주었지만 해당 값의 빈문자열이 들어가는 것을 확인할 수 있다.
- 해당 node객체의 style 값을 가져올려면 다른 라이브러리나 도구가 필요함!

### 콜백 지옥

-// 매개변수가 하나일때는 소괄호 생략가능
// 중괄호 생략시에는 return 문이 자동으로 들어감
const task1 = callback => {
console.log("task1");
setTimeout(() => {
callback();
}, 1000);
};

const task2 = callback => {
console.log("task2");
setTimeout(() => {
callback();
}, 1000);
};
const task3 = callback => {
console.log("task3");
setTimeout(() => {
callback();
}, 1000);
};
const task4 = callback => {
console.log("task4");
callback();
};

task1(() => {
task2(() => {
task3(() => {
task4(() => {
console.log("모든작업끝남");
});
});
});
});

### async, await

- async 를 함수에 붙이면 내부적으로 promise를 반환하는 것과 동일
- async function pickFruits() {

  - 사과를 호출후 순차적으로 바나나를 호출하고싶다면
  - getAplle 호출이후 then 구문후에 넣어야함
  - 이러면 결국 프로미스 지옥
  - getApple()
    .then(data => {
    console.log(data);
    getBnana().then(data => {
    console.log(data);
    });
    })
    .catch(error => {
    console.error(error);
    });
  - 이때 async, await 키워드를 통해 가독성을 해결할수있다

  - const apple = await getApple();
    const banana = await getBnana();

  - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
  - // Promise.all 을 사용하면 async로 처리되어있는 함수들을 병렬처리할 수 있다.
  - 또한 비구조화할당 문법을 사용해서 여러개의 api 또는 비동기처리를 한번에 시킬 수 있음
    const [appleValue, bananaValue] = await Promise.all([
    getApple(),
    getBanana(),
    ]);
  - 하지만 promise.all 메소드로 묶여져서 호출된 api중에 하나라도 오류가 발생하면 전체가 에러를 호출함
  - promise.allSetteld 를 사용해서 실패한 비동기 처리를 에러처리를 할 수 있음

  - #### 이론적으론 api 하나가 오류를 발생한다는 거 자체가 그 페이지는 문제!
    - 보통 이럴때 처리방법 중 하나로 에러페이지로 이동시켜서 사용자를 다른페이지로 이동시키는 방법도 있겠다.

- ### 타입스크립트 설치
- npm init -y // 기본 값으로 npm 초기화
- npm install typescript --save-dev // 개발모드로 설치
- node ./node_modules/typescript/bin/tsc --init # 타입스크립트 초기화
- node ./node_modules/typescript/bin/tsc index.ts //tsconfig.js ts 설정파일 생성
