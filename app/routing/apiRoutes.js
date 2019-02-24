var friends = require("../app/data/friends.js");
// var express = require('express');
var path = require('path');
// var router = express.Router()

// API ROUTES
module.exports = function (app) {

  app.get('/api/friends', function (req, res) {
    res.json(friends)
  });


  app.post('/api/friends', function (req, res) {
    var userInput = req.body;
    var userResponses = userInput.scores;

    var matchName = "";
    var matchImage = "";
    var totalDifference = 1000;

    for (var i = 0; i < friends.length; i++) {

      var diff = 0;

      for (var j = 0; i < friends.length; i++) {

        var diff = 0;
        for (var j = 0; j < userResponses.length; j++) {
          diff += Math.abs(friends[i].scores[j] - userResponses[j]);
        }

        if (diff < totalDifference) {
          totalDifference = diff;
          matchName = friends[i].name;
          matchImage = friends[i].photo;
        }
      }
      friends.push(userinput);
      res.join({ status: 'OK', matchName: matchName, matchImage: matchImage });
    };
  });
};
// /Users/samterrazas/Desktop/ga-tech/FriendFinder/app/data/friends.js
// ROUTING
// module.exports = function (app) {
//   app.get("/api/friends", function (req, res) {
//     res.json(friendsData);
//   });

//   app.post("/api/friends", function (req, res) {
//     var bestMatch = {
//       name: "",
//       image: "",
//       difference: 100
//     }

//     var userData = req.body;
//     var userScores = userData.scores;

//     var totalDifference = 0;

//     for (var i = 0; i < friendsData.length; i++) {
//       console.log(friendsData[i].name);
//       totalDifference = 0;

//       for (var j = 0; j < friendsData[i].scores.length; j++) {
//         totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

//         if (totalDifference <= bestMatch.difference) {
//           bestMatch.name = friendsData[i].name;
//           bestMatch.image = friendsData[i].image;
//           bestMatch.difference = totalDifference;
//         }
//       }
//     }
//     friendsData.push(userData);

//     res.json(bestMatch);
//   });
// };