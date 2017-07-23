const weatherAPI = require('./api/weather_api');
const googleMatrixApi = require('./api/google_api');
const twitterApi = require('./api/twitter_api');
const path = require('path');
const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 1337;

//weatherAPI('data.json');
//googleMatrixApi('mapMatrix.json');
//twitterApi('twitterData.json');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`### Listening to port ${port}`);
});