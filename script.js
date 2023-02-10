let coca = document.getElementById("coca");
let red = document.getElementById("red");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let yas = document.getElementById("yas");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  coca.style.top = value * 1.05 + "px";
  red.style.top = value * 0.5 + "px";
  text.style.marginRight = value * 2 + "px";
  text.style.marginTop = value * 1.5 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const toggleMenu = document.querySelector(".toggle");
const navigation = document.querySelector(".navbar");

toggleMenu.onclick = function () {
  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
};
