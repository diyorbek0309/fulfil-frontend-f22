let input = document.querySelector("input");
let clear_btn = document.getElementById("clear");

const showNumber = (sym) => {
  input.value = input.value + sym;
};

const calculate = () => {
  input.value = eval(input.value);
};

const clear = () => {
  input.value = "";
};

clear_btn.addEventListener("click", clear);
