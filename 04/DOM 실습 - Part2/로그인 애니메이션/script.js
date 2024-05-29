const loginTxtEl = document.querySelector(".login-text");

const ctaEl = document.querySelector(".cta");

const chevronDownEl = document.querySelector("fa-cheveron-down");

console.log(loginTxtEl, "loginText");

loginTxtEl.addEventListener("click", () => {
  loginTxtEl.classList.add("expend");
  console.log(loginTxtEl.className, "click");
});

ctaEl.addEventListener("click", () => {
  console.log("cta Click");
});
