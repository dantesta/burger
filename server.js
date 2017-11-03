// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;




app.listen(PORT);