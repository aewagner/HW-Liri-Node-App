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

} else if (inputOne === "spotify-this-song") {

    var spotify = new Spotify({

        id: "d3b691929cf04f92a44cb221690df275",
        secret: "6b3e1468353f48a9be6f84d0fc761ea2"
    });

    if (inputTwo) {
        spotify.search({ type: 'track', query: inputTwo }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists);
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }
        });
    } else {
        spotify.search({ type: 'track', query: "The Sign" }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }

            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log(i);
                console.log("artist(s): " + songs[i].artists);
                console.log("song name: " + songs[i].name);
                console.log("preview song: " + songs[i].preview_url);
                console.log("album: " + songs[i].album.name);
                console.log("-----------------------------------");
            }

            console.log(data.tracks.items);
        });

    }


}