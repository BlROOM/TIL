// 타입스크립트 = 자바스크립트에 타입추가된 언어

// 타입스크립트가 자동으로 타입을 추론한다 = 타입추론
// 타입을 지정하지 않았을 때 해당 변수 값에 들어간 값의 타입을 추론한다.
// 실무에서는 타입추론이 된다면
// 타입을 명시하지 않음
let helloStr = "hello";
// const hello = "hello world!";

// helloStr = 1; //<= string으로 타입추론 되어있어서 에러

// const 는 선언과 동시에 값이 할당됨
//  선언 이후에 값이 변경되지않음
// 그렇기 때문에 변수에 해당 값이 타입으로 지정되어있음
const bye = "bye typescript";

// let a: "abc" = "qweqwe"; // 타입을 'abc' 라는 값으로 한정!

// 타입 연산자 - | or &
const a: string = "hello";
const b: number = 1;
const c: boolean = false;
const d: null = null;
const f: undefined = undefined;
const g: object = {};
const h: symbol = Symbol();
const arr: Array<[]> = [];
// const arr2: (string & number)[] = ["hello", 10]; // string 이면서 number인 타입은 never오류발생
const arr2: (string | number)[] = ["hello", 10];
const f1: (str: string) => void = function () {};
const f2: (num: number) => number = function () {
  return 1;
};
const f3: (num: number) => number = () => {
  return 1;
};
