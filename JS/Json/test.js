const testJsonData = require("./test.json");
const testJson = [
    {"name" : "K"},
    {"name" : "U"},
    {"name" : "N"},
    {"name" : "A"},
    {"name" : "L"},
]

// console.log(testJson);
for(let i = 0; i < testJson.length; i++){
    console.log(testJson[i].name);
}