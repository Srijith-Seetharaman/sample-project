const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const location = process.argv[2];

!location && console.log(`Please enter the location to get the weather`);

location &&
  geocode(location, (error, { latitude, longitude, location } = {}) => {
    error && console.log("Error:", error);
    latitude &&
      longitude &&
      forecast(latitude, longitude, (forecaseData, error) => {
        location && console.log(`${location} forecast: ${forecaseData}`);
        error && console.log("Weather error:" + error);
      });
  });
