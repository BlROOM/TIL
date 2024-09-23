### 일급 객체란

---

일급객체(First-class Object)란 다른 객체들에 일반적으로 적용 가능한 연산을 모두 지원하는 객체를 가리킨다.

#### 일급 객체 조건

- 변수에 할당(assignment)할 수 있다.
- 다른 함수를 인자(argument)로 전달 받는다.
- 다른 함수의 결과로서 리턴될 수 있다.

#### 함수가 일급객체이기 때문에 할 수 있는 것은 무엇인가?

- 고차함수(Higher order function)를 만들 수 있다. </br>
  고차함수 : 함수를 매개변수로 사용하거나 함수를 반환하는 함수입니다

  <a href="https://www.youtube.com/watch?v=e-5obm1G_FY">고차 함수 영상</a>

  ```func는 익명함수

  # 다른 함수를 인자로 받는 경우
  function mul(num) { return num * num }

  function mulNum(func, num) {
  return func(num);
  }

  # 함수를 리턴하는 경우
  function mul(num1) {
  return function(num2) {
      return num2*num1;
  };
  }


  # 함수를 인자로 받고, 함수를 리턴하는 경우
  - 콜백(callback)을 사용할 수 있다.

  // 일반함수
  const mul = function(num) { return num * 2 }

  // 매개변수(parameter)로 func를 받았고, 함수(func)를 리턴하기 때문에 고차함수
  const mulNum = function(func, num) { return func(num) }

  // mulNum은 전달인자(argument)로 함수(mul)을 받았으므로 고차함수
  // 전달인자(argument)로 받은 함수인 mul은 콜백함수
  mulNum(mul, 3) // 6
  ```

### <a href="https://developer.mozilla.org/ko/docs/Glossary/First-class_Function">

MDN 일급함수란?
</a>
--
프로그래밍 언어는 해당 언어의 함수들이 다른 변수처럼 다루어질 때 일급 함수를 가진다고 합니다.

예를 들어, 일급 함수를 가진 언어에서 함수는 다른 함수들에 전달인자로 제공되고,

다른 함수에 의해 반환될 수 있으며, 변수에 값으로서 할당될 수 있습니다.

```const foo = () => {
console.log("foobar");
};
foo(); // 변수를 사용해 호출
// foobar
```
