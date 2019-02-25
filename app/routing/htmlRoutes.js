// DEPENDENCIES
var path = require('path');

// EXPORT HTML ROUTE
module.exports = function (app) {

  // HOME PAGE
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });

  // SURVEY PAGE
  app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
  });
};
