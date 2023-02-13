//task 1
function juft(n) {
  for (let i = 0; i < n; i += 2) console.log(i);
}

// juft(15);

// task 2

function sonTop(n) {
  for (let i = 1; i < n; i++) {
    if (i % 1225 === 0) {
      console.log("Son topildi");
    } else {
      console.log(i);
    }
  }
}

// sonTop(2454)

// task 3
let str = "";
function drawTriangle(n) {
  for (let i = 1; i <= n; i++) {
    str = str + " " + i;
    console.log(str);
  }
}

// drawTriangle(15);
