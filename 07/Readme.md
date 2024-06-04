## 리액트의 이벤트 관찰 diffing, batch update

- const [count, setCount] = useState(0);
- const onClickHandler = () => {
  setCount((prevCount) => {
  prevCount
  })
  };
- useState를 통해 콜백함수로 prev라는 값을 가져올 수 있다. 콜백 함수로 호출하게되면 항상 최신에 상태값을 가지고 있는다.
- setCount(100); 이방식은 한번에 새로운 값을 할당하는 방법
- 이전 값을 참조한다면 콜백함수를 사용하여 prev값에 접근하고
- 이전 값을 참조하지 않는다면 setCount(100) 같이 호출

  ## 상태 업데이트와 비동기성

  React의 상태 업데이트는 비동기적으로 일어납니다. 이는 성능 최적화를 위해 React가 여러 상태 업데이트를 일괄 처리(batch processing)하기 때문입니다. 이로 인해, 동일한 렌더링 사이클 내에서 여러 번의 상태 업데이트가 일어날 경우, 각 상태 업데이트가 이전 상태 값을 올바르게 반영하지 못할 수 있습니다.

### 리액트가 렌더링되는 조건

- #### 1 상태(State)의 변경

  컴포넌트의 상태가 변경되면 React는 해당 컴포넌트를 다시 렌더링합니다. 상태는 useState 훅을 사용하여 관리할 수 있으며, setState 함수를 호출하여 상태를 업데이트합니다. 상태가 변경되면 React는 컴포넌트를 다시 렌더링합니다

- #### 2. 속성(Props)의 변경

  부모 컴포넌트에서 전달된 속성이 변경되면 자식 컴포넌트가 다시 렌더링됩니다. 이는 부모 컴포넌트가 다시 렌더링될 때 자식 컴포넌트로 전달되는 속성이 변경되면 자식 컴포넌트도 다시 렌더링된다는 의미입니다.

- #### 3. 부모 컴포넌트의 렌더링

  부모 컴포넌트가 다시 렌더링되면, 자식 컴포넌트도 다시 렌더링됩니다. 이는 부모 컴포넌트가 상태나 속성의 변경으로 인해 다시 렌더링될 때 자식 컴포넌트도 다시 렌더링된다는 의미입니다.

- #### 4. 컨텍스트(Context)의 변경

  React 컨텍스트(Context)를 사용하여 컴포넌트 트리 전체에서 데이터를 공유할 수 있습니다. 컨텍스트 값이 변경되면 해당 컨텍스트를 사용하는 모든 컴포넌트가 다시 렌더링됩니다.

- #### 5. 강제 업데이트

  React에서는 forceUpdate 메서드를 사용하여 컴포넌트를 강제로 다시 렌더링할 수 있습니다. 이는 보통 권장되지 않지만, 클래스 컴포넌트에서 사용할 수 있습니다.

- #### 6. 키(Key) 변경
  리스트 렌더링 시, React는 각 항목에 고유한 키를 사용하여 항목을 추적합니다. 키가 변경되면 해당 항목이 다시 렌더링됩니다.

### React.memo

- 컴포넌트의 상태를 메모, 기억하는 것
- 부모 컴포넌트에서 관리하는 상태값이 변해서 생기는 자식 컴포넌트의 재렌더링 현상을 자식 컴포넌트에 memo를사용해서 방지한다.

### useCallback

- useCallback 함수를 생성하는 곳에서 메모이제이션 하는 것이 원칙
- const [user, setUser] = useState(userInialized);
- const onChangeHandler = useCallback(
  (text: string) => {
  const filterUser = user.filter(item => item.includes(text));
  setUser(filterUser);
  },
  [user]
  );
- 함수를 최적화할때 메모이제이션 기법을 활용해서 deps, 의존성 배열에 함수에서 의존하는 값을 넣어주어 함수가 재렌더링을 방지할 수 있다.
  - ### usecallback 의존성 배열안에 usecallback 함수를 또 넣어버리면?
  - React에서 useCallback을 사용할 때 의존성 배열에 useCallback을 사용한 함수를 추가하는 것은 권장되지 않습니다. 의존성 배열에 useCallback을 사용한 함수를 추가하면 무한 루프가 발생할 수 있습니다.
  - useCallback은 함수를 메모이제이션하는 훅이며, 의존성 배열을 통해 해당 함수가 의존하는 값들을 지정합니다. useCallback 안에서 다른 useCallback을 호출하면 그 함수가 변경될 때마다 새로운 함수 인스턴스가 생성됩니다. 이는 의존성 배열에 해당 함수를 추가할 때 무한 루프로 이어질 수 있습니다.

### useMemo 메모이제이션

- 많은 연산,작업이 들어간 값을 메모이제이션, 즉 계산을 방지할 때 사용한다.
- 의존성배열에 어떠한 값이 변경될 때 해당 연산을 실행시킬 값을 넣어준다.
- useMemo는 사용하곳에서 값을 감싸주는 것을 원칙으로 사용

### useRedcuer

- useReducer는 생성시 딱 한번만 생성된다.
- 그러므로 useReducer라는 참조값은 변하지 않으므로 dispatch 자동으로 메모이제이션 되는 현상
- https://ko.legacy.reactjs.org/docs/hooks-reference.html#usereducer
- //const [state, dispatch] = useReducer(reducer, initialArg, init);

- const [state, dispatch] = useReducer(reducer, 0);

- const reducer = (state: number, action: any) => {
  console.log(state, action);
  // useRedcuer에 매개변수로 들어갈 콜백함수
  // 상태관리 로직
  // action안에있는 type이라는 속성값을 이용해
  // state 값을 다룬다
  // action.type값을다루는게 관례
  switch (action.type) {
  case "sucoading":
  return state + 100;
  case "snifer":
  return state + 50;
  }
  return state;
  };

- // dispatch를 호출하게되면 reducer함수가(useReducer함수에 첫번째 매개변수) 호출됨!
-       <button onClick={() => dispatch({ type: "sucoading", payload: 100 })}>

- dispatch를 사용할때는 type과 payload를 매개변수로 하여 호출한다.

- Reducer Hook에서 현재 state와 같은 값을 반환하는 경우 React는 자식을 리렌더링하거나 effect를 발생하지 않고 이것들을 회피할 것입니다. (React는 Object.is 비교 알고리즘을 사용합니다.)

### Context API

- import React, { createContext, SetStateAction, useState } from "react";
  import NavBar from "./components/Navbar";
  import Home from "./components/Home";
  // import Banner from "./components/Banner";

type CountContextType = {
count: number;
setCount: React.Dispatch<SetStateAction<number>>;
};
export const CountContext = createContext<CountContextType | null>(null);
const App = () => {
const [count, setCount] = useState(0);
return (
<>
<CountContext.Provider value={{ count, setCount }}>
<NavBar />
{/_ <NavBar count={count} /> _/}
<Home />
</CountContext.Provider>
</>
);
};

export default App;

- react 에서 creatContext 를 import해서 전역 상태값을 사용할 컴포넌트들을 Context.provier 로 감싼후 value 속성을 활용해서 사용할 값들을 넣어준다, state 및 setState
- const [count, setCount] = useState(0);

-       <CountContext.Provider value={{ count, setCount }}>

- import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  } from "react";
  type CountContextType = {
  count: number;
  setCount: React.Dispatch<SetStateAction<number>>;
  };
  export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {},
  });
  const CounterProvier = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
  <CountContext.Provider value={{ count, setCount }}>
  {children}
  </CountContext.Provider>
  );
  };

export default CounterProvier;

- 이런식으로 context.provider를 감싸는 컴포넌트를 만들어서 childrend을 props로받아 return하는 형식의 컴포넌트로 사용한다!
- 이렇게사용하지않고 app 최상위 컴포넌트에서 바로 context.provider를 사용하면 전체가 리렌더링된다.

### 상태 끌어올리기

- #### State 상태 끌어 올리기

  - 단방향 데이터 흐름이라는 원칙에 따라 하위 컴포넌트는 상위 컴포넌트로부터 전달받은 데이터의 형태나 타입이 무엇인지만 알수 있다. 즉, 데이터가 state로부터 왔는지, 하드코딩으로 입력된 내용인지 알지 못한다. 이러한 문제를 React는 다음과 같이 해결했다. 상위 컴포넌트의 "상태를 변경하는 함수" 그 자체를 하위 컴포넌트로 전달하고, 이 함수를 하위 컴포넌트가 실행한다. 이것은 단방향 데이터 흐름의 원칙을 벗어나지 않는 해결 방법이다. 이것이 바로 상태 끌어올리기 이다.

- 변하지 않는 외부(부모)로 부터 전달 받은 값
  props를 함수의 전달인자 처럼 전달 받아 이를 기반으로 화면에 어떻게 표시 되는지 기술하는 React 엘리먼트를 반환(객체 형태로 반환) 한다.
  부모 컴포넌트(상위 컴포넌트)로 부터 전달 받은 것으로 읽기 전용이다. (수정x)
- 외부로 부터 전달 받아 변하지 않는 값으로 함부로 변경될 수 없는 읽기 전용이다.(read-only)
- 공통으로 사용하는 상태만 끌어 올리는게 좋다.
- props는 읽기 전용으로 자식 컴포넌트에서 - 전달받은 데이터를 변경할 수 없다.
- 상태 데이터를 다른 컴포넌트에서도 사용할 경우 최상위 컴포넌트에 배치하는 게 좋다.

### Context api 에서의 최적화 실패

- context provider 안에있는 함수, 값들을 usememo, useCallback으로 감싸서 사용해 자식 컴포넌트들에서 사용해도 최적화가 되지않는 오류가 발생한다
- 해당 값들을 한번 더 context provider로 감싼후에 한번더 메모이제이션 함수들로 감싸야 최적화가 된다?
- 그만큼 최적화에 context api는 까다롭고 다른 상태관리 라이브러리를 사용하는 것이 좋을 듯 하다.
