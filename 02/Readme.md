### 논리형의 false 값

- -음수
- 0
- '' 빈 문자열
- null
- undefined
- 조건문은 항삭 소괄호안의 식을 참 또는 거짓으로 반환하려고 합니다. 따라서 0 , false, null , undefined 이외의 값은 전부 참이라고 봐야합니다.

### if 문

- 1.  소괄호 안에 있는 표현식의 참 거짓 여부 판별 후 중괄호 안의 코드 실행
- 2. 거짓이면 else if 또는 else로 넘어감
- 3. else if 는 여러개 사용 가능
- 4. else 생략 가능

### switch 문과 if문의 차이점

- switch 문은 (비교하려는 값) 소괄호안에 표현식이 들어갈 수 없음!
- switch 문은 break 문을 만날때 까지 안에 구현된 코드를 실행시킴
- 값을 가지고 공통된 로직을 표현할때는 switch 문을 사용하는 것이 효과적
- if문은 (표현식) 표현식이 들어가므로 좀더 복잡한 코드를 구현가능

### switch의 성능 장점?

- 여러가지 의견이 있음 switch문은 컴파일시 점프 테이블을 통해 성능적으로 빠르게 컴파일 가능하다는 것 같은데 그럼 그만큼에 <strong>오버헤드가</strong> 발생할 수 있다?

- https://kldp.org/node/62262

- 점프 테이블 (Jump Table) 생성:
  만약 switch 문의 각 case 값이 연속적이거나 거의 연속적이라면, 컴파일러는 점프 테이블을 생성할 수 있습니다. 점프 테이블은 배열처럼 동작하며, 상수 시간에 특정 case로의 분기를 가능하게 합니다.
  switch (x)에서 x가 1, 2, 3, 4와 같은 연속된 값을 가질 때, 컴파일러는 이러한 값을 인덱스로 하는 테이블을 생성하여 상수 시간에 해당 case로 이동할 수 있습니다.
  assembly
  코드 복사
  ; Pseudo-assembly code for a switch using a jump table
  mov eax, [x]
  cmp eax, 4
  ja default_case ; If x > 4, jump to default
  jmp [jump_table + eax * 4] ; Jump to the address in the jump table

jump_table:
dd case_1
dd case_2
dd case_3
dd case_4

- 이진 탐색 (Binary Search):
  case 값들이 연속적이지 않지만, 일정한 범위 내에 있을 때 컴파일러는 이진 탐색 알고리즘을 사용하여 효율적인 분기를 구현할 수 있습니다. 이진 탐색은 O(log n) 시간 복잡도를 가지므로 많은 case가 있을 때 효율적입니다.
  assembly
  ; Pseudo-assembly code for a switch using binary search
  ; Assuming the case values are sorted
  mov eax, [x]
  cmp eax, case_mid ; Compare with middle case value
  jl lower_half ; Jump to the lower half of the search space
  jg upper_half ; Jump to the upper half of the search space
  ; Handle the middle case

- 단순한 if-else 체인:
  만약 case 값들이 매우 드문 경우나 복잡한 조건을 가지는 경우, 컴파일러는 if-else 체인으로 컴파일할 수 있습니다. 이 경우 성능은 일반적인 if-else 체인과 유사하게 됩니다.

### if-else 체인

- if-else 체인은 각 조건을 순차적으로 평가합니다. 조건이 많아질수록 평가해야 할 조건도 많아지고, 최악의 경우 모든 조건을 평가해야 합니다.

if (x === 1) {
// code for case 1
} else if (x === 2) {
// code for case 2
} else if (x === 3) {
// code for case 3
} else {
// default code
}
위의 코드에서 x가 1이 아닐 경우, 2를 비교하고, 다시 3을 비교하는 식으로 모든 조건을 순차적으로 평가합니다. 조건이 많을수록 성능이 저하될 수 있습니다.

결론
switch 문은 컴파일러가 점프 테이블이나 이진 탐색 등의 최적화 기법을 사용하여 많은 조건을 효율적으로 처리할 수 있게 합니다. 이는 특히 조건이 많고, 비교할 값들이 일정한 패턴을 가질 때 성능이 좋습니다. 반면, if-else 체인은 조건을 순차적으로 평가하므로 많은 조건이 있을 때 성능이 저하될 수 있습니다.

따라서, switch 문이 많은 조건을 다룰 때 if-else 체인보다 성능이 좋은 이유는 컴파일러가 적용할 수 있는 다양한 최적화 기법 덕분입니다.

### 함수란?

- 참조값이며 하나의 특별한 목적을가지며 하나의 특별한 실행을 가지는 문법입니다.

### 호이스팅이란?

- https://zoon-bloom.tistory.com/29

### 실행컨텍스트

- 스택이라는 공간에 데이터가 들어가게되면 먼저들어간 코드가 제일 나중에 실행되게 된다. 즉 맨 마지막에 스택에 들어간 코드가 제일 먼저 실행된다. - 스택자료구조

- 스택에 들어간 하나의 공간을 <strong>컨테이너</strong>라고 부르며 제일 나중에 들어간 컨테이너를 <strong>글로벌 콘테이너</strong>라고 부름

- <strong> 컨테이너 안에는 레코드와 아우터 라는부분이 존재함!</strong>

- 레코드는 생성단계와 실행단계를 가진다.
  - 글로벌 실행컨텍스트와,함수 실행 컨텍스트, Eval 실행 컨텍스트가 있다
  - 생성단계에서는 환경 레코드에 선언문을 기록하는 역할을한다.
  - var 는 환경레코드에 기록되면 미리 undefined로(초기화) 저장됨
  - 그다음 실행단계로 넘어가서 실제 선언된 값을 할당함
  - let, const는 선언단계에서 환경레코드에 객체만 등록을함
    (래퍼런스만) 메모리공간과 값은 할당하지 않음
  - 아우터 라는 공간에서는 밑에있는 컨테이너 즉 다음 실행할 컨텍스트를 참조할 수 있게끔 연결되어있다.
  - 아우터와 레코드를 합쳐 렉시컬 스코프라고 부른다.
  - ### 렉시컬 스코프의 특징
    - 렉시컬 스코프에서는 함수가 정의된 위치에 따라 변수의 유효 범위가 결정됩니다. 즉, 함수 내부에서 변수를 참조할 때, 해당 함수가 정의된 시점의 스코프 체인에 따라 변수를 찾습니다.
    - 함수 정의 시점에 스코프 결정: 함수가 어디서 정의되었는지가 중요
    - 정적 스코프 체인: 스코프 체인은 함수가 호출될 때마다 동적으로 변하지 않습니다.
    - 스코프 체인: 함수가 정의된 위치에 따라 상위 스코프를 참조하는 체인이 형성됩니다.
- 또다른 컨테이너는 함수 컨테이너가 있다

### 생성자 함수

- function createPerson() {}
  - new createPerson(); //new 키워드를 붙여서 CreatePerson 호출하면
  - function CreatePerson() {
    this = {}
    return this
    } 이렇게 생략되어 호출된다.
  - const person3 = new CreatePerson("john", 20) 생성자 함대문자로 작성하며
  - function CreatePerson(name, age) {
    this.name = name;
    this.age = age;
    }
  - const person4 = new CreatePerson("jun", 25);
    const person5 = new CreatePerson("kim", 30); 이렇게 똑같은속성에 객체생성시 사용가능

### 프로토 타입

- CreatePerson.prototype.speak = function () {
  console.log(`안녕하세요 제 이름은${this.name}`);
  };
- 생성자 함수에서는 프로토타입을 활용해서 함수를 생성가능하며 this또한 활용가능하다.
- 또한 그 생성자함수를 통해 생성된 객체들또한 그 프로토타입에 함수를 사용가능하며 \_prototype 을 사용해서 부모 생성자 함수의 값을 추적가능하며 이를 프로토타입 체이닝이라고 한다.
- 최상위 프로토타입은 Object이며 String, Number 등의 부모 생성자 object들도 확인 가능하며 이것을 프로토타입 체이닝을 통해 상속한다는 것을 알 수 있다.
- 추가로 상위 Array.prototype객체에는 여러 배열 메소드들을 확인 가능하다.
