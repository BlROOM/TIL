{
} //empty object

// 키와 값으로 이루어져있음 //속성들의 집합
const user = {
  name: "john",
  age: 25,
  isStudent: false,
  isTeacher: true,
  address: {
    city: "New York",
    street: "Brodway",
  },
};

console.log(user.name, user.age);
console.log(user["age"]);
delete user.age; //객체 속성값 제거하기
console.log(user);
