const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=d5a17281219749675b7897dce29931b3&units=metric';

function getTemp(location) {
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
  return axios.get(requestUrl)
    .then(response => {
      if (response.data && response.data.cod && response.data.message) {
        throw new Error(response.data.message);
      } else {
        return Promise.resolve(response.data.main.temp);
      }
    })
    .catch(response => {
      return Promise.reject(response);
    });
}

module.exports = {
  getTemp
};
