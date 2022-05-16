const http = require("http");

const weatherStackUrl = `http://api.weatherstack.com/current?access_key=cc46c85449d162ee850df4a2e42c3759&query=45,-75&units=f`;

const request = http.request(weatherStackUrl, (response) => {
  let data = "";
  response.on(`data`, (chunk) => {
    data += chunk.current;
  });
  response.on(`end`, () => {
    console.log(`Response: ${data}`);
  });
});

request.on(`error`, (error) => {
  console.log(`ERROR: ${JSON.stringify(error)}`);
});

request.end();
