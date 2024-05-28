class Shape {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

// class  Rectangle(width, height) {
//   //call 을 통해 Shape 호출하여 에 바인딩되어있는 color 값을
//   // Rectangle 에 call메소드를 통해 바인딩
//   this.width = width;
//   this.height = height;
//   // this.getArea = function () {
//   //   return this.width * this.height;
//   // };
// }

const shape1 = new Shape("blue");

// 상속
// extends

class Recatangle extends Shape {
  // 상속을 하든, 상속을 안하든 반드시
  // constructor 를 가지고 있어야한다.
  // extends를 사용해서 상속을 구현하면
  // 상속 받은 자식 클래스는 super() 를 사용해야한다.
  // 자신이 상속한 클래스를 호출하는 역할
  // 부모에서는 color라는 값이 있기때문에
  // 자식에서는 부모에서 선언되어있는 속성들을 super메서드의 인자로 전달해야한다.
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const rect1 = new Recatangle(10, 20);
class Car {
  #speed; //비공개속성
  constructor(speed) {
    this.#speed = speed;
  }
  // 무한루프에 빠진 오류 발생
  // _속성명을 붙여서 무한루프에 빠지지않게함
  // get 또한 _speed로 작성
  get speed() {
    // return this._speed;
    return this.#speed;
  }

  set speed(value) {
    if (value < 0) {
      throw new Error("speed must be bigger than 0");
    }
    this.#speed = value;
  }
  getSpeed() {
    return this.#speed;
  }
}

const car1 = new Car(100);
car1.speed = 300;
// console.log(car1.getSpeed());
// console.log(car1);

class MathUtils {
  //static 키워드는 인스턴스화를 방지
  //값이 고정되어있음 get만 가능하다는건가?
  static PI = 3.14;
  static APP_NAME = "Math Utils";

  constructor(number) {
    this.number = number;
  }
  static add(a, b) {
    return a + b;
  }
}

const mathUtils = new MathUtils();
console.log(MathUtils.PI);
// console.log(MathUtils.add(10, 2));
// console.log(mathUtils.add(10, 2));

MathUtils.prototype.add = function (a, b) {
  console.log(a, b);
  return a + b;
};

const mathUtils2 = new MathUtils();

// console.log(MathUtils.add(10.2));
// console.log(mathUtils2.add(10, 2));

// Date 는 인스턴스화가 가능
const cusTomdate = new Date(2000);

// console.log(cusTomdate);
// console.dir(Date.prototype);
