// DEPENDENCIES
var path = require("path");

// ROUTES
module.exports = function (app) {

  // ROUTE TO HOME PAGE
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // ROUTE TO SURVEY 
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};

