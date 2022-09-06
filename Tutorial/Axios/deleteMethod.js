const axios = require("axios");

async function doPostRequest() {
  let payload = { name: "Kunal Singh", occupation: "Software Engineer" };

  let res = await axios.delete("http://httpbin.org/post", payload);
  console.log(res.data);
}

doPostRequest();