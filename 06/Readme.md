### CSS Modules

- 모듈 방식을 사용해서 특정 컴포넌트에만 종속되는 CSS 코드를 작성하기 위한 방법입니다. 외부 스타일 방법과 비슷하지만, 파일명이 \*.module.css라는 특징이 있습니다.

- .button {
  background-color: #ccc;
  border: none;
  color: white;
  padding: 15px 32;
  text-align: center;
  text-decoration: none;
  width: 25vh;
  height: 7vh;
  cursor: pointer;
  font-size: 14px;
  }

- 위 스타일을 사용할 컴포넌트에서 import하여 className에 적용시킨다.
- import styles from "./Button.module.css";
- \<button onClick={handler()} className={styles.button}>
  Logout
  </button>

## Tailwind css 설치

- A utility-first CSS framework
- 자동으로적으로 설정되어있는 css를 가져가다 쓰는 도구이다.
- npm install -D tailwindcss
- npx tailwindcss init # tailwind.config.js 생성

- export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {},
  },
  plugins: [],
  };

## Css-in-js 와 utility-first CSS framework의 차이

- Next.js에서 Server Components(RSC)를 활용하면, 서버 측에서 pre-render 단계에서 미리 HTML과 CSS를 클라이언트에 전달합니다.

- 클라이언트가 이를 받아서 화면에 보여주게 됩니다. 따라서, Next.js의 서버 컴포넌트(RSC)를 활용하려면 빌드 시에 CSS 파일이 사전에 준비되어야 합니다.
- 반대로 런타임에 JavaScript를 사용해 CSS를 동적으로 생성하는 접근법 ( 이를테면 CSS-In-JS )은 Next.js의 RSC에 호환되지 않고 주로 클라이언트 컴포넌트에서 활용됩니다.

- ##### Server Components(RSC):

  - 서버에서 HTML과 함께 CSS를 미리 렌더링하여 클라이언트에 전달.
    초기 로딩 시점에 최적화된 HTML과 CSS가 제공되어 빠른 초기 렌더링 가능.
    빌드 시점에 모든 필요한 CSS 파일이 준비되어야 함.

#### CSS-in-JS:

    - CSS는 런타임에 JavaScript를 통해 동적으로 생성되고 적용됨.
    - 초기 로딩 시 HTML은 CSS 없이 로드되고, JavaScript가 실행된 후에야 CSS가 적용됨.
    - 초기 로딩 시점에 스타일링이 적용되지 않은 HTML이 잠시 나타날 수 있음.

### vanilla extract

- 제로 런 타임(Zero Run Time)이라는 개념이 새롭게 등장하게 되면서 최근에 급 부상하고 있는 라이브러리입니다. 제로 런 타임이란,
- 런 타임 오버헤드가 없는 CSS를 의미합니다. 조금 더 쉽게 말하면 스타일을 적용하는 데 있어서 런타임에 추가적인 자바스크립트 코드 실행이나 연산이 필요하지 않는 CSS를 의미합니다.

- 런타임 오버헤드란?
  런타임 오버헤드란, 프로그램이 실행되는 동안 추가적인 연산이나 자원 소비를 의미합니다. 런타임 오버헤드가 발생하면 메모리 사용량이 증가하고, CPU 사용량이 증가하며, 응답 시간 지연이 된다는 성능적 단점이 발생하게 됩니다.

**제로 런 타임이 아닌 것은 어떤데?**

- styled-components나 emotion 같은 라이브러리는 ‘컴포넌트가 렌더링 될 때’ 스타일을 생성하여 적용합니다. 이러한 라이브러리들은 컴포넌트가 렌더링 될 때마다 스타일을 생성하기 때문에 스타일을 동적으로 생성하거나 조건에 따라 스타일을 변경하는 경우에 유용하지만, 그에 따른 성능 비용이 따릅니다.

- 타입 세이프티: CSS-in-JS 솔루션들은 일반적으로 타입 세이프티가 부족한 경우가 많습니다. Vanilla Extract는 TypeScript와의 통합을 통해 타입 세이프티를 제공합니다.
- 빌드 성능: 전통적인 CSS-in-JS 라이브러리들은 런타임 성능에 영향을 미칠 수 있는 동적 스타일링을 지원하지만, 이는 초기 로딩 속도를 저하시킬 수 있습니다. - Vanilla Extract는 빌드 시점에 CSS를 생성하여 이 문제를 해결합니다.
- 서버 사이드 렌더링(SSR): CSS-in-JS 솔루션은 서버 사이드 렌더링 시 스타일을 처리하는 데 복잡한 설정이 필요할 수 있습니다. Vanilla Extract는 빌드 시 CSS를 추출하여 SSR을 단순화합니다. - #### 장점 - 타입 세이프티: TypeScript 통합을 통해 CSS 클래스 및 스타일에 대한 타입 검사를 제공하여 개발자가 안전하게 스타일을 작성할 수 있도록 합니다.
- 빌드 시 CSS 추출: CSS를 빌드 시점에 추출하여 런타임 오버헤드를 줄이고 초기 로딩 속도를 개선합니다. - 정적 CSS 파일: 전통적인 방식처럼 정적 CSS 파일을 생성하므로 캐싱 및 최적화를 통해 성능을 높일 수 있습니다. - 간편한 SSR: 빌드 시 CSS를 추출하기 때문에 서버 사이드 렌더링 설정이 간단해집니다.
- 모듈 기반 스타일링: CSS 모듈과 유사한 방식으로 스타일을 작성할 수 있어 클래스 네임 충돌을 방지하고 스타일링을 모듈화할 수 있습니다.
  단점
  빌드 설정 필요: Webpack 등의 빌드 도구와 통합하여 사용해야 하므로 초기 설정이 필요합니다.
  동적 스타일링 제한: 빌드 시점에 CSS를 추출하기 때문에 런타임 동적 스타일링은 제한될 수 있습니다.
  CSS-in-JS의 일부 장점 상실: 전통적인 CSS-in-JS 솔루션의 일부 유연성(예: 테마 변경이나 동적 스타일 변경)을 잃을 수 있습니다.
  결론
  Vanilla Extract는 타입 세이프한 스타일링과 빌드 시점 CSS 추출을 제공하여 성능과 유지 보수성을 높이는 라이브러리입니다. 그러나 초기 설정이 필요하고, 런타임 동적 스타일링에는 제한이 있을 수 있습니다. 이러한 이유로, Vanilla Extract는 타입 세이프티와 성능을 중시하는 프로젝트에 적합합니다.

### css module, classnames, cx 사용법

- npm install classnames
- import classNames from "classnames/bind";
- button.moudle.css 파일을 작성
- .button {
  border: none;
  color: white;
  padding: 15px 32;
  text-align: center;
  text-decoration: none;
  width: 25vh;
  height: 7vh;
  cursor: pointer;
  font-size: 14px;
  background-color: #ed484d;
  } 클래스형형태로 작성
- const cx = classNames.bind(styles); //classNames.bind 메소드를 호출하여 cx 변수를 선언
- <button
  type={type}
  onClick={handler()}
  className={cx("btn")}
- 태그에서 className에 cx메소드를 호출하여 인자로 사용할 moudle.css정의된 클래스이름을 문자열로 보내줌

### 컴포넌트에서 받는 많은 props를 ...rest 문법을 활용해서 한번 보내주기

- export default function Button(props: TButtonProps) {
  const { children, ...resButtonProps } = props;
- 이렇게 props 를 객체 구조분해할당으로 받아주고 ...resButtonProps 나머지 props를 정의해주고
- <button
  // type={type}
  // onClick={handler()}
  // className={cx("btn")}
  // disabled={disabled}
  // name={name}
  {...resButtonProps} >
- 이런식으로 사용한다!

### 리액트 type alias로 받은 props 타입 선언

- type TButtonProps = React.ComponentProps<"button"> & {
  type: "submit" | "button" | "reset";
  disabled: true | false; //boolean ;
  name: string;
  children: React.ReactNode;
  };
- React.ComponentProps<"태그이름"> <= 이형식으로 사용한다.

### 리액트에서 ...rest 사용해서 자식 컴포넌트 style 동적으로 적용시키기기

- <CustomBtn
  style={{
          backgroundColor: "#7D48ED",
          color: "white",
          width: "77px",
        }} >
- const CustomBtn = ({
  children,
  // backgroudColor,
  ...restStyleProps
  }: TCustomBtnProps) => {
  - const { style } = restStyleProps;
  - <button
    className={cx("primaryBtn")}
    style={style}
    >

### useState는 제네릭으로 타입설정되어 있다.

-     function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
- const [count, setCount] = useState<number>(0); 이런식으로 설정되는것이 정확한 타입설정이다.
- 하지만 타입스크립트는 해당 설정된 값으로 타입을 추론하기 때문에 굳이 설정하지 않아도 된다!
