const request = require("request");
var API_KEY = "8d5fa36b2ddabda4e20077aa1390e4b4";

const forecast = function (latitude, longitude) {
  var url =
    `http://api.openweathermap.org/data/2.5/weather?` +
    `lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;

  request({ url: url, json: true }, function (error, response) {
    if (error) {
      console.log("Unable to connect to Forecast API");
    } else {
      console.log(
        "This data is for " +
          response.body.name +
          ", " +
          response.body.sys.country
      );
      console.log(
        "It is currently " + response.body.main.temp + " degrees out."
      );
      //   console.log(JSON.stringify(response.body));
      console.log(
        "The high today is " +
          response.body.weather[0].description +
          " with a low of " +
          response.body.weather[1].description
      );
      console.log("Humidity today is " + response.body.main.humidity + "%");
    }
  });
};

var latitude = 22.7196; // Indore latitude
var longitude = 75.8577; // Indore longitude

// Function call
forecast(latitude, longitude);
