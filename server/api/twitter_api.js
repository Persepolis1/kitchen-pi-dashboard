const request = require('request');
const jsonFile = require('jsonfile');
const Twitter = require('twitter');
require('dotenv').config({path: '.env'});

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

let twitterApi = function (filepath) {
  twitterClient.get('statuses/user_timeline', params, (error, tweets, response) => {
    if (!error) {
      jsonFile.writeFile(filepath, tweets, {spaces: 2}, err => {
        console.error(err);
      })
    }
    else
      console.log(error);

  });
}

module.exports = twitterApi;
