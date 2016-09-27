var app = angular.module("IssuesApp", ['ngRoute']);

app.controller("MainController", ["$scope", "$http", function($scope, $http, $routeProvider) {
    // $scope.issueName = "";
    // $scope.voteCount = 1;
    // $scope.userComment = "";

    $scope.upVote = function(voteCount) {
        $scope.voteCount++;
    }

    $scope.downVote = function(voteCount) {
        $scope.voteCount--;
    }

    $http.get('/issues/')
        // res.send(issues);
        .success(function(response) {
            console.log(response);
            $scope.issues = response;

            console.log("it works");
            return $scope.issues;
        })
        .error(function(data) {
            console.log("something went wrong");
        });

    $scope.submitIssue = function(issueName, userComment) {

        var config = {};
        var issueObj = {
            name: $scope.issueName,
            comment: $scope.userComment
        };
        console.log(issueObj);

        $http.post('/issues/', issueObj)
            .success(function(issueObj) {
                $scope.PostDataResponse = issues;
            })
            .error(function(data) {
                console.log("You are not finding success.");
            });
    };



}]);
