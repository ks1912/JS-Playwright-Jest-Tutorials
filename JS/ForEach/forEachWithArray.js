const students = ["John", "Sara", "Jack"];

// using forEach
students.forEach(myFunction);

function myFunction(item) {
  console.log(item);
}

// * * Updating the Array Elements
// using forEach
students.forEach(myFunction);

function myFunction(item, index, arr) {
  // adding strings to the array elements
  arr[index] = "Hello " + item;
}

console.log(students);

// forEach with Arrow Function
// with arrow function and callback

students.forEach((element) => {
  console.log(element);
});

// for loop to forEach()
// Here is an example of how we can write a program with for loop and with forEach().

const arrayItems = ['item1', 'item2', 'item3'];
const copyItems = [];

// using for loop
for (let i = 0; i < arrayItems.length; i++) {
  copyItems.push(arrayItems[i]);
}

console.log(copyItems);