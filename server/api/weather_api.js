require('dotenv').config({path: 'secrets.env'});
const request = require('request');
const jsonFile = require('jsonfile');
const key = process.env.WEATHER_API_KEY;

let getData = function (filepath) {
  request(`https://api.darksky.net/forecast/${key}/45.5017,-73.5673?units=si`, (error, response, body) => {
    let responseBody = JSON.parse(body);
    console.error(error);
    jsonFile.writeFile(filepath, responseBody, {spaces: 2}, err => {
      console.error(err);
    })
  });
}

module.exports = getData;
