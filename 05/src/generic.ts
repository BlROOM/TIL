// 제네릭
// 함수를 호출할때 타입을 결정할 수 있다.
// <T >에 타입을 즉 인자로 들어온타입으로 사용하겠다.

// function getSize<T>(
//   values: number[] | string[] | (number | string | boolean)[]
// ): number {
//   return values.length;
// }

// function getSize<T>(values: T[] | T): number | "Not Array" {
//   return Array.isArray(values) || typeof values === "string"
//     ? values.length
//     : "Not Array";
// }

type TGetSizeFunc = <T>(values: T[] | T) => number | "Not Array";

// const getSize: TGetSizeFunc = <T>(values: T[] | T): number | "Not Array" => {
//   return Array.isArray(values) || typeof values === "string"
//     ? values.length
//     : "Not Array";
// };

const getSize: TGetSizeFunc = values => {
  return Array.isArray(values) || typeof values === "string"
    ? values.length
    : "Not Array";
};

// getSize<number>([1, 2, 3]);
getSize(["1", "2", "3"]); // <= 호출할 때 <T> 가 생략된다 즉 타입추론이된다
getSize(["1", "2", "3", 1, 2, 3]);
getSize([true, false, 1, 2]);
getSize("hello world");
