const request = require('request');
const jsonFile = require('jsonfile');
const express = require('express');
const socket = require('socket.io');
const Twitter = require('twitter');
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

let twitterClient = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret:process.env.TWITTER_CONSUMER_SECRET,
  access_token_key:process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let params = {
  screen_name : "rtm_VH",
  trim_user: true,
  exclude_replies: true,
  count : 5
};
twitterClient.get('statuses/user_timeline',params, (error, tweets, response) =>{
  if (!error){
    console.log(response);
    jsonFile.writeFile("twitterExample.json", tweets, {spaces: 2},  err => {
      console.error(err);
    })
  }
  else
    console.log(error);

});