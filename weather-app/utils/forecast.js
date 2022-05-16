const request = require("request");

const weatherStackUrl = `http://api.weatherstack.com/current`,
  accessKey = "cc46c85449d162ee850df4a2e42c3759",
  units = "f";

const forecast = (latitude, longitude, callback) => {
  request(
    {
      url: `${weatherStackUrl}?access_key=${accessKey}&query=${latitude},${longitude}&units=${units}`,
      json: true,
    },
    (error, { body } = {}) => {
      error &&
        callback(`Weather data not available. Sorry, please try again later.`);

      body.error &&
        callback(`Unable to find weather using the given location.`);

      body.current &&
        callback(
          `${body.current.weather_descriptions[0]}. It is currently ${
            body.current.temperature
          } degrees ${
            units === "m" ? "Celsius" : units === "s" ? "Kelvin" : "Fahrenheit"
          } outside. It feels like ${body.current.feelslike} degrees ${
            units === "m" ? "Celsius" : units === "s" ? "Kelvin" : "Fahrenheit"
          } outside.`
        );
    }
  );
};

module.exports = forecast;
