const request = require("request");

const accessToken = `pk.eyJ1Ijoic3Jpaml0aC1zZWV0aGFyYW1hbiIsImEiOiJjbDMzeGR4MW0wejByM2NxdnduNHBxc2M0In0.XDZF6taCxGZhxG7O2TXuTQ`,
  url = (place) =>
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      place
    )}.json`,
  limit = "1";

const geocode = (address, callback) => {
  request(
    {
      url: `${url(address)}?access_token=${accessToken}&limit=${limit}`,
      json: true,
    },
    (error, { body } = {}) => {
      if (error) {
        callback("Unable to connect to services");
      } else if (body.features.length === 0) {
        callback("Unable to find location. Try another search");
      } else
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name,
        });
    }
  );
};

module.exports = geocode;
