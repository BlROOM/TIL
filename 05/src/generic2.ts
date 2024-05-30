type TUser3<T> = {
  name: string;
  age: number;
  likeFood: T; // array, string, number 등 any
};

const user1: TUser3<string[]> = {
  name: "mike",
  age: 23,
  likeFood: ["banana", "apple"],
};

interface IUser3<T> {
  name: string;
  age: number;
  likeFood: T; // array, string, number 등 any
}
