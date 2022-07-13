// forEach with Maps
// You can iterate through the Map elements using the forEach() method. For example,

let map = new Map();

// inserting elements
map.set("name", "Jack");
map.set("age", "27");

// looping through Map
map.forEach(myFunction);

function myFunction(value, key) {
  console.log(key + "- " + value);
}