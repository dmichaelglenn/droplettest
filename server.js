
var express = require('express');
var cors = require('cors');
var logger = require('morgan');
var bodyParser = require('body-parser');


var issuesRoute = require("./routes/issuesRoute.js");

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/issues", issuesRoute);




app.listen(4000, function() {
    console.log("Listening on 4000 son");
})
