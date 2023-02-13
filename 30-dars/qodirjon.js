///* Qodirjon

//! 1-task

function juftSonlar(x) {
  for (let i = 0; i <= x; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// juftSonlar(55);

//! 2-task

function boluvchi1225(n) {
  for (let i = 1; i <= 1225 * n; i++) {
    if (i % 1225 === 0) {
      console.log(i);
    }
  }
}

// boluvchi1225(5);

//! 3-task

function triangle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " " + i;
    // str = "" + " " + 1 = " 1"
    // str = " 1" + " " + 2 = " 1 2"
    // str = " 1 2" + " " + 3 = " 1 2 3"
    console.log(str);
  }
}

// triangle(15);
