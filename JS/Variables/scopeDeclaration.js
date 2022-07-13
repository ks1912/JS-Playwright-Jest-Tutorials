let a = 10; // Global declaration of let so that its scope is in whole code.
// const aa; // We can not define a const without assining a value to it. (SyntaxError: Missing initializer in const declaration)
const bb = 100;
const tempFun = () => {
  a = 20;
  let b = 30;
  bb = 100; // TypeError: Assignment to constant variable.
  const cc = 300;
  console.log(b);
  console.log(a);
  console.log(cc);
  console.log(bb);
};
// Calling a function
tempFun();
// console.log(b); // ReferenceError: b is not defined
console.log(a);
// console.log(cc); // ReferenceError: cc is not defined
console.log(bb);
