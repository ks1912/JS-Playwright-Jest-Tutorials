function myDisplayer(some) {
  console.log("Sum is " + some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// When you pass a function as an argument, remember not to use parenthesis.
// Right: myCalculator(5, 5, myDisplayer);
// Wrong: myCalculator(5, 5, myDisplayer());

// When to Use a Callback?
// Where callbacks really shine are in asynchronous functions, where one function has to wait for another function (like waiting for a file to load).
// Asynchronous functions are covered in the next chapter.
