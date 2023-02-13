let input = document.querySelector("input");
let clear_btn = document.getElementById("clear");
let bs = document.getElementById("bs");
let symbols = document.getElementsByClassName("symbol");

const showNumber = (sym) => {
  input.value = input.value + sym;

  if (input.value === "0") {
    input.value = "0.";
  }

  for (let i = 0; i < 5; i++) {
    symbols[i].disabled = false;
    symbols[i].classList.add("for-hover");
  }
};

const calculate = () => {
  if (input.value !== "") {
    input.value = eval(input.value);
  }
};

const clear = () => {
  input.value = "";
};

clear_btn.addEventListener("click", clear);

const amallar = (symb) => {
  input.value = input.value + symb;

  for (let i = 0; i < 5; i++) {
    symbols[i].disabled = true;
    symbols[i].classList.remove("for-hover");
  }
};

const uchirish = () => {
  // 567
  // let value = input.value.split(""); // ["5", "6", "7"]
  // value.pop(); // ["5", "6"]
  // input.value = value.join("");
  input.value = input.value.slice(0, input.value.length - 1);
};

bs.addEventListener("click", uchirish);
