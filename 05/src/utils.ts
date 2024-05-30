type TPerson = {
  name: string;
  age: number;
  address: string;
};

// Partial 옵션
// 객체가 가지는 전체속성에 ? 속성을 부여해서
//  옵셔널을 부여해준다

const person3: Partial<TPerson> = {
  name: "qwe",
  age: 1,
  address: "qweqwewq",
};

// required 옵션
// 객체가지는 모든 속성에 읽기 전용으로 부여한다
// 즉 무조건 갑을 부여애야함
type TCar = {
  make?: string;
  mode?: number;
  yaer?: number;
};

const car2: Required<TCar> = {
  make: "qwe",
  mode: 3,
  yaer: 1234,
};

// Recrod 옵션
// 타입을 선언하지않고도 변수에 Record속성을 부여해 명시할 수 있다.
const person4: Record<string, string | number> = {
  name: "qweq",
  address: "qweqeqw",
  // qwer : [],
};
