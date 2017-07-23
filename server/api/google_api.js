require('dotenv').config({path: 'secrets.env'});
const jsonFile = require('jsonfile');
const request = require('request');
const key = process.env.MAP_MATRIX_API_KEY;

let getMapData = function (filepath) {
  request(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=Montreal,QC&destinations=Vaudreuil+Dorion,QC&key=${key}`, (error,response,body) => {
    let responseBody = JSON.parse(body);
    jsonFile.writeFile(filepath, responseBody, {spaces: 2},  err => {
      console.error(err);
    })
  });
}
module.exports = getMapData;