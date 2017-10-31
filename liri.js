var keys = require("./keys.js");

var Twitter = require("twitter");

var Spotify = require("node-spotify-api");

var request = require("request");

var fs = require("fs");

var inputOne = process.argv[2];

var inputTwo = process.argv[3];

if (inputOne === "my-tweets") {

    var client = new Twitter(keys);

    var params = {
        screen_name: "au_ew89"
    };
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log("");
                console.log(tweets[i].text);
            }
        }
    });

}