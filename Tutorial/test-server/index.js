const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Running Server on Localhost 3001 KS")
})

app.listen(3001, () => {
  console.log("Running express server");
});
