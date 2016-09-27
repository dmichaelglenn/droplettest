var express = require('express');
var uuid = require('uuid');
var issuesRoute = express.Router();

var issues = [{
    name: "Michael has BO",
    comment: "Man I can't stand that guy"
}, {
    name: "Agustin is ahead of everyone else",
    comment: "Maybe we should give him a virus"
}]

issuesRoute.route("").get(function(req, res) {
    res.send(issues);
});

issuesRoute.route("").post(function(req, res) {
    var newIssue = req.body;
    newIssue.id = uuid.v4();
    issues.push(newIssue);
    res.send(issues);
});

module.exports = issuesRoute;
