require('dotenv').config();
const request = require('request');
const jsonFile = require('jsonfile');
const key = process.env.WEATHER_API_KEY;

let getData = function (filepath) {
  console.log(key);
  request(`https://api.darksky.net/forecast/${key}/45.5017,-73.5673?units=si`, (error, response, body) => {
    let responseBody = JSON.parse(body);
    jsonFile.writeFile(filepath, responseBody, {spaces: 2}, err => {
      console.error(err);
    })
  });
}

module.exports = getData;
