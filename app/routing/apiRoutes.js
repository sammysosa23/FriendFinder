// DEPENDENCIES
var path = require('path');

// IMPORT FRIENDS.JS
var friends = require('../data/friends.js');

// EXPORT API ROUTE
module.exports = function (app) {

  // GET FRIENDS LIST
  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  // POST NEW FRIEND
  app.post('/api/friends', function (req, res) {

    // CAPTURE NEW FRIEND INFO
    var userInput = req.body;

    var userResponses = userInput.scores;

    // FRIEND FINDER MATCH
    var matchName = '';
    var matchImage = '';
    var totalDifference = 10000;


    // Examine all existing friends in the list
    for (var i = 0; i < friends.length; i++) {
      // ADDING EACH QUESTION
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
    // ADD NEW FRIEND
    friends.push(userInput);

    // RETURN NEW FRIEND IN MODAL
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
  });
};
