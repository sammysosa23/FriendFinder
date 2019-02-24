// DEPENDENCIES
var path = require("path");
// var express = require("express");
// var router = express.Router();

// ROUTES
module.exports = function (app) {

  // ROUTE TO HOME PAGE
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // ROUTE TO SURVEY 
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/survey.html"));
  });

  // IF NO ROUTE IS LOCATED IT WILL DEFAULT BACK TO HOME PAGE
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  // module.exports = router;
}


// FriendFinder / app / public / survey.html