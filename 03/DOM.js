// documnet.객체에
//  1.내가 조작하고싶은 dom을 선택
// 2. getElementById로 html에 선택가능
// 3. getElementsByClassName으로 태그에 calssName에 지정되어있는 문자열을 인자로 배열형태로

const hEl = document.querySelector("h1");
console.log(hEl);

const allEl = document.querySelectorAll(".text-red");

allEl.forEach(pEl => (pEl.innerHTML = "hello"));
console.log(allEl);

allEl.forEach(pEl => pEl.remove());
console.log(allEl);
