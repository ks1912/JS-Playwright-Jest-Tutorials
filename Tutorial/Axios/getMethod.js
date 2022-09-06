// Import axios
const axios = require("axios");

// With Then
axios.get("http://webcode.me").then((resp) => {
  console.log(resp.data);
});

// With Async and Await
const getAxiosMethod = async () => {
  let res = await axios.get("http://webcode.me");
  console.log(res.data);
};

// getAxiosMethod();

const makeRequest = async () => {
  const config = {
    method: "get",
    url: "http://webcode.me",
  };

  let res = await axios(config);
  console.log(res.status);
};

makeRequest();

// https://api.github.com/users
