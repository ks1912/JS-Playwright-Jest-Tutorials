const jsonData = require("./test.json")

// topic1 (key) and Playwright (vlaue)
console.log(Object.keys(jsonData.workedOk)[0]);
console.log(jsonData.knowJSFramework[1]);

// topic2New (key)
console.log(Object.keys(jsonData.tricky.data[1]));