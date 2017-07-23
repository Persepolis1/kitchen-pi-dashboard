const weatherAPI = require('./api/weather_api');
const googleMatrixApi = require('./api/google_api');
const twitterApi = require('./api/twitter_api');
const express = require('express');
const socket = require('socket.io');

weatherAPI('data.json');
googleMatrixApi('mapMatrix.json');
twitterApi('twitterData.json');