// function add(a: number, b: number): number {
//   return a + b;
// }

// function minus(a: number, b: number): number {
//   return a - b;
// }

// function multi(a: number, b: number): number {
//   return a * b;
// }

type TFunc = (a: number, b: number) => number;
interface IFunc {
  (a: number, b: number): number;
}

const add: TFunc = function (a, b): number {
  return a + b;
};

const minus: TFunc = function (a, b) {
  return a - b;
};

const multi: TFunc = function (a, b) {
  return a * b;
};

const arrFunc: TFunc = (a, b) => {
  return 1;
};
