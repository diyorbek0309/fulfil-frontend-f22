// function getUsers(callback) {
//   setTimeout(() => {
//     callback([
//       { username: "john", email: "john@test.com" },
//       { username: "jane", email: "jane@test.com" },
//     ]);
//   }, 500);
// }

// function findUser(username) {
//   getUsers((users) => {
//     const user = users.find((user) => user.username === username);
//     console.log(user);
//   });
// }

// findUser("john");

// Callback hell

// function findUsers(username) {
//   const users = getUsers();
//   const user = users.find((user) => user.username === username);

//   return user;
// }
// console.log(findUsers("jane"));

// console.log("Start");

// console.log("Middle");

// console.log("End");

// console.log("Start");

// setTimeout(() => {
//   console.log("Middle");
// }, 0);
// clearTimeout();

// let count = 0;

// const interval = setInterval(() => {
//   console.log(count);

//   if (count === 10) {
//     clearInterval(interval);
//   }

//   count++;
// }, 0);

// console.log("End");

// Event loop
// FIFO - First In First Out

// let index = Math.random(); // 0.56545326
// console.log(index);

// const promise = new Promise((resolved, rejected) => {
//   if (index > 0.5) {
//     resolved("success");
//   } else {
//     rejected("error");
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Finally");
//   });

function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { username: "john", email: "john@test.com" },
        { username: "jane", email: "jane@test.com" },
      ]);
    }, 500);
  });
}

const findUsers = async (username) => {
  const users = await getUsers();

  console.log(users.find((user) => user.username === username));

  //   promise
  //     .then((users) => {
  //       let user = users.find((user) => user.username === username);
  //       console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

findUsers("jane");
