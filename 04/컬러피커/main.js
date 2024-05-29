/*
  색상 컬러 클릭시 body 태그의 배경 색상을 
  선택한 컬러로 변경해주세요.
*/

const allEl = document.querySelectorAll("input");
const body = document.querySelector("body");
for (let i = 0; i < allEl.length; i++) {
  allEl[i].addEventListener("click", () => {
    console.log(allEl[i].value);
    body.style.backgroundColor = allEl[i].value;
  });
}
