// Annonomus Function is same like callback function its just they dont have a function name.
// Array declaration
const arr = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];

// Single line
arr.forEach((arrayItem, arrayIndex) => console.log(arrayIndex));

// Multiline
arr.forEach((arrayItem, arrayIndex) => {
    return arrayIndex
})