// interface IPerson {
//   name: string;
//   age: number;
// }

// // const user2: IPerson = { name: "Jane", age: 22 };

// // interface IPerson {
// //   gender: string;
// // }

// user.age = 20;

interface IWorker {
  company: string;
  position: string;
}

// const worker2: IPerson & IWorker = {
//   // IPerson 이면서 IWorker 타입이어야한다

//   name: "john",
//   age: 25,
//   company: "samsung",
//   position: "front",
// };

// const worker3: IPerson | IWorker = {
//   // IPerson 또는 IWorker 타입이어야한다
//   name: "john",
//   age: 25,
//   company: "samsung",
//   // position: "front",
// };

// console.log(worker3);

interface IUser {
  name: string;
  age: number;
}

interface IUserAdress extends IUser {
  zipcode: string;
  address: string;
}

const user2: IUserAdress = {
  name: "jojb",
  age: 1,
  zipcode: "qweqw",
  address: "서울",
};

type TUserAdress = IUser &
  IWorker & {
    zipcode: string;
    address: string;
  };
