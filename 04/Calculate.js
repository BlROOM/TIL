class Calculate {
  constructor(num) {
    this.num = num;
  }
  add(num) {
    this.num += num;
    return this;
  }
  minus(num) {
    this.num -= num;
    return this;
  }
  result() {
    return this.num;
  }
}

//인스턴스 객체가 아니면 인서턴스 메소드를 사용할수없음
// 클래스는 자기 자신을 반환하고있음
const calc1 = new Calculate(10);
// const calc2 = new Calculate(5);
// const calc3 = new Calculate(11);
const calc2 = calc1.add(5);
console.log(calc1.result());
console.log(calc2.result());
