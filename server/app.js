const weatherAPI = require('./api/weather_api');
const googleMatrixApi = require('./api/google_api');
const twitterApi = require('./api/twitter_api');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const localConfig = require('../webpack.config.js');
const path = require('path');

const express = require('express');
const socket = require('socket.io');

const app = express();
const port = 1337;

//weatherAPI('data.json');
//googleMatrixApi('mapMatrix.json');
//twitterApi('twitterData.json');


const compiler = webpack(localConfig);
const middleware = webpackMiddleware(compiler, {
  publicPath: localConfig.output.publicPath,
  contentBase: 'src',
});

app.use(middleware);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`### Listening to port ${port}`);
});