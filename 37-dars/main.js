let btn1 = document.getElementById("btn1");
let btn2 = document.querySelector("#btn2");

const clickHandler = () => {
  alert("Button bosildi!");
};

btn1.addEventListener("mousedown", () => console.log("mousedown"));
btn1.addEventListener("click", () => console.log("click"));
btn1.addEventListener("mouseup", () => console.log("mouseup"));
// btn2.addEventListener("click", clickHandler);

btn2.onclick = clickHandler;

// Vanilla JS
// Pure JS

// document.body.addEventListener("DOMContentLoaded", () => {
//   console.log("sdfd");
// });

// document.body.onload = () => {
//   console.log("123");
// };
