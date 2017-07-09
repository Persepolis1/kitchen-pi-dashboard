const request = require('request');
const jsonFile = require('jsonfile');
require('dotenv').config({path: 'secrets.env'});
const weatherApiKey = process.env.WEATHER_API_KEY;

request(`https://api.darksky.net/forecast/${weatherApiKey}/37.8267,-122.4233`,  (error, response, body) => {
  let responseBody = JSON.parse(body);
  console.error(error);
  jsonFile.writeFile("data.json", responseBody, {spaces: 2},  err => {
    console.error(err);
  })
});

