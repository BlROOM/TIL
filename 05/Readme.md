### npx

- 전역, 로컬에 설치되어있는 라이브러리를 실행시켜주는 명령어

### interface

- interface는 같은 이름으로
  오버라이딩, 병합이 가능하기 때문에
- 중복 타입 선언이 가능하며
- 오류를 야기할 수 있다.
- interface IPerson {
  name: string;
  age: number;
  }

- const user2: IPerson = { name: "Jane", age: 22 }; //gender속성이 없다는 오류 발생

- interface IPerson {
  gender: string;
  }

- user.age = 20;

### interface 와 type의 사용법?

- 객체, Object는 interface ,
- 원시타입은 type을 써서
- 작성한 interface에 원시타입 type을 추가해서 사용

### Pick

- 필요한 객체에 내가 지정한 값만 내가 필요한 부분만 꺼내서 쓴다.
- interface IUser extends Pick<ISignupUser, "name" \| "age"> {}
- type TUser = Pick<ISignupUser, "name" | "age">;

### Omit은

- 필요한 객체에 내가 지정한 값을 제외하고 가져온다.
  interface IUser extends Omit<ISignupUser, "name" | "age"> {}
  type TUser = Omit<ISignupUser, "name" | "age">;

### Generic

- 제네릭
- 함수를 호출할때 타입을 결정할 수 있다.
- <T>에 타입을 즉 인자로 들어온타입으로 사용하겠다.
  function getSize<T>(
  values: number[] | string[] | (number | string | boolean)[]
  ): number {
  return values.length;
  }

- function getSize<T>(values: T[]): number {
  return values.length;
  }
- getSize<number>([1, 2, 3]);
- getSize(["1", "2", "3"]); // <= 호출할 때 <T> 가 생략된다 즉 타입추론이된다
- getSize(["1", "2", "3", 1, 2, 3]);
- getSize([true, false, 1, 2]);

### 타입스크립트 utils 옵션들

- Pick 은 필요한 부분만 빼서 쓴다
- interface IUser extends Pick<ISignupUser, "name" | "age"> {}
  type TUser = Pick<ISignupUser, "name" | "age">;

- Omit은 필요한 객체에 내가 지정한 값을 제외하고 가져온다.
- interface IUser extends Omit<ISignupUser, "name" | "age"> {}
  type TUser = Omit<ISignupUser, "name" | "age">;

- type TPerson = {
  name: string;
  age: number;
  address: string;
  };

- Partial 옵션
- 객체가 가지는 전체속성에 ? 속성을 부여해서옵셔널을 부여해준다

- const person3: Partial<TPerson> = {
  name: "qwe",
  age: 1,
  address: "qweqwewq",
  };

---

- required 옵션
- 객체가지는 모든 속성에 읽기 전용으로 부여한다
  즉 무조건 갑을 부여애야함
- type TCar = {
  make?: string;
  mode?: number;
  yaer?: number;
  };

- const car2: Required<TCar> = {
  make: "qwe",
  mode: 3,
  yaer: 1234,
  };

- Recrod 옵션
- 타입을 선언하지않고도 변수에 Record속성을 부여해 명시할 수 있다.

- const person4: Record<string, string | number> = {
  name: "qweq",
  address: "qweqeqw",
  // qwer : [],
  };

### npm vs yarn

- npm은 싱글 스레드로 한번에 하나의 작업만 실행가능
- yarn은 병렬 처리가 가능하여 여러개의 작업을 실행 가능

### react package.json 에 자동 설치되는 react-scripts?

- react-scripts 는 자동으로 js파일을 읽어서 바닐라 js 코드로 변환해준다.

### Dom과 가상돔

- 돔은 Document Object Model을 의미합니다. 웹 브라우저에 표시되는 모든 UI 구성 요소는 웹 브라우저 내부적으로 객체 형태로 관리되고 있으며, 이를 이용해서 자바스크립트는 웹 브라우저 구성 요소에 접근할 수 있습니다. 이러한 DOM은 데이터 자료 구조 중 트리(tree) 구조인데, 돔 트리(DOM Tree)라고도 부릅니다.

  - 웹 브라우저는 이러한 DOM의 구성 요소 중 일부를 변경하면, 그 일부와 연결된 모든 DOM을 업데이트 한다는 동작 원리를 가지고 있습니다. 그래서 DOM 트리가 깊으면 깊을 수록, DOM 구성 요소의 변경에 대한 작업 비용이 많이 들어갑니다.

- ### 가상돔(Virtual Dom)이란?

기존 DOM을 대비하기 위해서 <strong>리액트는 가상 돔
</strong>이라는 새로운 개념을 만들었습니다. 가상 돔은 기존의 DOM을 그대로 복사해서 리액트 내부 메모리에 저장합니다. 리액트에서 어떤 코드의 변경 사항이 발생하게 되면 이렇게 복사한 DOM을 사용해서 변경 사항을 처리하며, 최종적으로 실제 DOM과 비교하여 변경된 부분만 업데이트하기 때문에 DOM 구성 요소의 변경에 대한 작업 비용이 낮고 효율적입니다.

- https://zoon-bloom.tistory.com/39

### 리액트 npm run dev 구동 동작

- npm rund dev 시 리액트의 개발 서버가 시작되고
  index.html 읽는다
- index.html 안에있는 app.js자바스크립트 파일을 읽는다.
- app.js 파일을 babel 트랜스파일하여
- 브라우저 렌더링 과정이 진행된다.
- 리액트는 변경사항을 감지하여 diffing, batch 와 같은 동작들을 한다.

### Next.js 초기 렌더링

- Next.js 는 초기에 html 파일을 만들어서 클라이언트로 미리 보내준다.
- 그렇기 때문에 사용자가 처음 페이지를 보는 시간이 빠르다.
- 하지만 CSR 에 비해서는 초기 진입 로딩 속도가 전체 적인 초기 다운로드는 느리다.
- 다른 페이지로 이동시에는 빠르다
  - 이미 html 파일들을 다 다운로드 하였기 때문
- 그다음에 클라이언트에서 그다음 js파일을 읽은 후
- <strong>hydration이라는</strong> 동작이 실행되어 한번더 렌더링 된다.
- next에서는 페이지 이동시 a 태그로 이동시에 페이지가 새로고침이 되지만 hydration이라는 동작을 제대로 구현시키면 페이지는 새로고침되지 않는다?

### HMR(Hot Module Replacement)

- HMR은 브라우저를 새로 고치지 않아도 웹팩으로 빌드한 결과물이 웹 애플리케이션에 실시간으로 반영될 수 있게 도와주는 설정입니다. 브라우저 새로 고침을 위한 LiveReload 대신에 사용할 수 있으며 웹팩 데브 서버와 함께 사용할 수도 있습니다.

#
