interface ISignupUser {
  name: string;
  age: number;
  gender: string;
  address: string;
}

// interface IUser {
//   // name: string;
//   name: SignupUser["name"]; //string type
//   age: number;
// }

// Pick 은 필요한 부분만 빼서 쓴다
// interface IUser extends Pick<ISignupUser, "name" | "age"> {}
// type TUser = Pick<ISignupUser, "name" | "age">;

// Omit은 필요한 객체에 내가 지정한 값을 제외하고 가져온다.
interface IUser extends Omit<ISignupUser, "name" | "age"> {}
type TUser = Omit<ISignupUser, "name" | "age">;
