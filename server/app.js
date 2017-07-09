const request = require('request');
const jsonFile = require('jsonfile');
const socket = require('socket.io');
require('dotenv').config({path: 'secrets.env'});
const weatherApiKey = process.env.WEATHER_API_KEY;
const mapMatrixApiKey = process.env.MAP_MATRIX_API_KEY;

request(`https://api.darksky.net/forecast/${weatherApiKey}/45.5017,-73.5673?units=si`,  (error, response, body) => {
  let responseBody = JSON.parse(body);
  console.error(error);
  jsonFile.writeFile("data.json", responseBody, {spaces: 2},  err => {
    console.error(err);
  })
});
request(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Montreal,QC&destinations=Vaudreuil+Dorion,QC&key=${mapMatrixApiKey}`, (error,response,body) => {
  let responseBody = JSON.parse(body);
  jsonFile.writeFile("mapMaptrix.json", responseBody, {spaces: 2},  err => {
    console.error(err);
  })
});
