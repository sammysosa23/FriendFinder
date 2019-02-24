// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// - - - - - - - - - - - - - - - - //

// EXPRESS CONFIG & SETUP
var app = express();
// PROCESS.ENV.PORT NEEDED FOR RUNNING ON HEROKU
var PORT = process.env.PORT || 3000;

// PUBLIC DIRECTORY
app.use(express.static(path.join(__dirname, "./app/public")));

// MIDDLEWARE FOR PARSING
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// app.use(express.static(process.cwd() + "/app/public"));

// NOT SURE IF I WILL NEED THIS

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// - - - - - - - - - - - - - - - - //

// ROUTER POINTING TO ROUTE FILES NEEDED TO RUN
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);

// app.use("/", routerHTML);
// app.use("/api", routerAPI);

// - - - - - - - - - - - - - - - - //

// SERVER IS LISTENING
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT + "! GOOD, KEEP GOING!");
});


