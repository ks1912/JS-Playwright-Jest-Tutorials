// The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// expected output: true

console.log(object1.hasOwnProperty("toString"));
// expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// expected output: false

// The hasOwnProperty() method returns true if the specified property is a direct property of the object — even if the value is null or undefined. The method returns false if the property is inherited, or has not been declared at all. Unlike the in operator, this method does not check for the specified property in the object's prototype chain.
// let fruits = ["Apple", "Banana", "Watermelon", "Orange"];
// console.log(fruits.hasOwnProperty(3)); // true ('Orange')
// console.log(fruits.hasOwnProperty(4)); // false - not defined
