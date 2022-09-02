// task 1

// function juftSon(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) console.log(i, "juft son");
//   }
// }

// juftSon(20);

// task 2

function findNumber(n) {
  let collect = [];
  for (let i = 1; i <= n * 1225; i++) {
    if (i % 1225 === 0) {
      collect.push(i);
      console.log(i, collect.length);
    }
  }
}

// findNumber(5);

// task 3

function drawTriangle(t) {
  for (let i = 1; i <= t; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }

    console.log("\n");
  }
}
// drawTriangle(10);
