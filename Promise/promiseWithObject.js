const count = true;

let countValue = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value.");
  } else {
    reject("There is no count value");
  }
});

console.log(countValue);

// returns a promise

// With the help of then
// let countValueNew = new Promise(function (resolve, reject) {
//   resolve("Promise resolved");
// });

// // executes when promise is resolved successfully

// countValueNew
//   .then(function successValue(result) {
//     console.log(result);
//   })

//   .then(function successValue1() {
//     console.log("You can call multiple functions this way.");
//   });
