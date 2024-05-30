type TSumFn = (a: number, b: number) => number;

const j: TSumFn = (a, b) => {
  return a + b;
};

type TString = string;

const hello: TString = "Hello World";

type TNumber = number;
const nun: TNumber = 10;

type TStringArray = string[] | null;

const likefoot: TStringArray | null = [];

type Tuser = object;

type TUserPick = {
  name: string;
  age?: number;
  // 옵셔널 체이닝 age 값에 ?붙임으로써 해당 속성값이 없을 수도 있음!
  child: Tuser;
};

let user: TUserPick = {
  name: "qweq",
  // age: 20,
  child: {},
};

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "jun",
  age: 20,
};

type MyWorkder = {
  company: string;
  readonly position: string;
};

const worker: MyWorkder & Person = {
  name: "john",
  age: 25,
  company: "samsung",
  position: "front",
};
