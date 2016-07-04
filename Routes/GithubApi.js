var express = require('express');
var request = require('request');

var router = express.Router({ mergeParams: true });
module.exports = router;

// GetIssuesAPI

getIssues = function (req, res) {

    getIssuesCallback = function (error, response, body) {
        if (error != null) {
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        } else {
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };

    var options = {
        url: "https://api.github.com/repos/rails/rails/issues?" +
        "?page=" + req.query.page,
        headers: {
            'User-Agent': 'nimatra'
        }
    };
    request(options,
        getIssuesCallback);
};


router.use('/getIssues', getIssues);

// getCommentsAPI

getComments = function (req, res) {

    getCommentsCallback = function (error, response, body) {
        if (error != null) {
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        } else {
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };

    var options = {
        url: "https://api.github.com/repos/rails/rails/issues/" +
        req.query.issueId +
        "/comments" +
        "?page=" + req.query.page,
        headers: {
            'User-Agent': 'nimatra'
        }
    };
    request(options,
        getCommentsCallback);
};


router.use('/getComments', getComments);