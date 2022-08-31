// let age = 12;
// let result = age >= 16 ? "Siz pasport olgansiz!" : "Siz pasport olmagansiz!";

// console.log(result);

// if (age >= 16) {
//   console.log("Siz pasport olgansiz!");
// } else {
//   console.log("Siz pasport olmagansiz!");
// }

// console.log(age >= 16 ? "Siz pasport olgansiz!" : "Siz pasport olmagansiz!");

// let experience = 4;
// let result =
//   experience <= 1
//     ? "Siz juniorsiz!"
//     : experience > 1 && experience < 3
//     ? "Siz middlesiz!"
//     : "Siz seniorsiz!";

// console.log(result);

// if (experience <= 1) {
//   console.log("Siz juniorsiz!");
// } else if (experience > 1 && experience < 3) { // true && false = false
//   console.log("Siz middlesiz!");
// } else {
//   console.log("Siz seniorsiz!");
// }

// let numberOfDay = 1;

// switch (numberOfDay) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Bunday hafta kuni yo'q!");
// }

// if (numberOfDay === 1) {
//   console.log("Dushanba");
// } else if (numberOfDay === 2) {
//   console.log("Seshanba");
// } else if (numberOfDay === 3) {
//   console.log("Chorshanba");
// } else if (numberOfDay === 4) {
//   console.log("Payshanba");
// } else if (numberOfDay === 5) {
//   console.log("Juma");
// } else if (numberOfDay === 6) {
//   console.log("Shanba");
// } else if (numberOfDay === 7) {
//   console.log("Yakshanba");
// } else {
//   console.log("Bunaqa hafta kuni topilmadi!");
// }
// let firstName = "Diyorbek",
//   lastName = "Olimov";
// // let result = firstName + lastName;
// let result = `${firstName}----${lastName}`;

// console.log(result);

// Qodirjon

// function juftToq(x) {
//   x % 2 === 0 ? console.log("Juft") : console.log("Toq");
// }

// juftToq(4);

// let age = 26;

// function person() {
//   if (age <= 16) {
//     console.log("O`quvchi");
//   } else if (age > 16 && age < 25) {
//     console.log("Talaba");
//   } else if (25 <= age && age < 60) {
//     console.log("Ishchi");
//   } else {
//     console.log("Nafaqaxo`r");
//   }
// }

// person();

// let a = 10;
// let b = 150;
// let c = 20;

// function MaxSum() {
//   if (a === Math.max(a, b, c)) {
//     if (b > c) {
//       console.log(a, b, a + b);
//     } else {
//       console.log(a, c, a + c);
//     }
//   } else if (b === Math.max(a, b, c)) {
//     if (a > c) {
//       console.log(b, a, a + b);
//     } else {
//       console.log(b, c, c + b);
//     }
//   } else if (c === Math.max(a, b, c)) {
//     if (a > b) {
//       console.log(c, a, c + a);
//     } else {
//       console.log(c, b, c + b);
//     }
//   }
// }

// MaxSum();

// function KabisaYearAndDays(year, month) {
//   switch (month) {
//     case "Yanvar":
//     case "Mart":
//     case "May":
//     case "Iyul":
//     case "Avgust":
//     case "Oktyabr":
//     case "Dekabr":
//       console.log(month, " oyida 31 kun bor");
//       break;
//     case "Fevral":
//       if (year % 4 === 0) console.log(month, " oyida 29 kun bor");
//       else console.log(month, " oyida 28 kun bor");
//       break;
//     case "Aprel":
//     case "Iyun":
//     case "Sentyabr":
//     case "Noyabr":
//       console.log(month, " oyida 30 kun bor");
// default: 
// console.log("Bunday oy yo'q!")
//   }
// }

// KabisaYearAndDays(1994, "Mart");


