function getNumbersToN(n) {
  let result = [];

  for (let i = 1; i < n - 1; i++) {
    result.push(i);
  }

  return result;
}

// console.log(getNumbersToN("khgjhg"));

// 10:35 PM => 21:35
// 09:35 AM => 09:35

function convertTime(time) {
  let result = "";
  if (time.split(" ")[1] === "PM") {
    let hour = time.slice(0, 2);
    let hourNum = Number(hour) + 12;
    if (hourNum === 24) {
      hourNum = "00";
    }
    result = hourNum + time.slice(2, 5);
  } else {
    result = time.slice(0, 6);
  }

  return result;
}

// console.log(convertTime("10:00 PM"));
