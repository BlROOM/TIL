const myNameEl = document.querySelector(".myname");
const showEl = document.querySelector(".show");
const allPEl = document.querySelectorAll("p");

// myNameEl.style.display = "block";
// showEl.style.display = "none";

// showEl.addEventListener("click", () => {
//   allPEl.forEach(pEl => {
//     if (pEl.className === "show") {
//       pEl.style.display = "none";
//     } else {
//       pEl.style.display = "block";
//     }
//   });
// });

// myNameEl.addEventListener("click", () => {
//   allPEl.forEach(pEl => {
//     if (pEl.className === "myname") {
//       pEl.style.display = "none";
//     } else {
//       pEl.style.display = "block";
//     }
//   });
// });

// allPEl.forEach(pEl => {
//   // console.log(pEl, "객체요");
//   pEl.addEventListener("click", function () {
//     if (pEl.style.display === "block") {
//       // console.log(pEl.style.display);
//       pEl.style.display = "none";
//     } else {
//       // console.log(pEl.style.display);
//       pEl.style.display = "block";
//     }
//   });
// });

function toggleShow(el1, el2) {
  el1.style.display = "none";
  el2.style.display = "block";
}

myNameEl.addEventListener("click", () => {
  toggleShow(myNameEl, showEl);
});

showEl.addEventListener("click", () => {
  toggleShow(showEl, myNameEl);
});
