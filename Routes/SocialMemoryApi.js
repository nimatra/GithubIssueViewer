var express = require('express');
var request = require('request');

var router = express.Router({mergeParams: true});
module.exports = router;

// RegisterAPI

register = function(req, res) {

    registerCallback = function(error, response, body) {
        if(error != null){
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        }else{
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };

    request("https://socialmemoryapi.azurewebsites.net/api/register/" +
            "?userIdOnSource=" + req.query.userIdOnSource +
            "&displayName=" + req.query.displayName +
            "&email=" + req.query.email,
            registerCallback);
  };


router.use('/register', register);


// AddMemoAPI

addMemo = function(req, res) {

    addMemoCallback = function(error, response, body) {
        if(error != null){
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        }else{
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };
        
    request.post("https://socialmemoryapi.azurewebsites.net/api/Comment/"+
            "?owner=" + req.body.owner +
            "&memoId=" + req.body.memoId +
            "&outlookCommentStr=" + encodeURI(JSON.stringify(req.body.OutlookComment)),

            addMemoCallback);
  };
  
router.post('/addMemo', addMemo);

// DeleteCommentAPI

deleteMemo = function(req, res) {

    deleteMemoCallback = function(error, response, body) {
        if(error != null){
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        }else{
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };
        
    request.delete("https://socialmemoryapi.azurewebsites.net/api/Comment/"+
            "?owner=" + req.body.owner +
            "&memoId=" + req.body.memoId +
            "&commentId=" + req.body.commentId,

            deleteMemoCallback);
  };
  
router.post('/deleteComment', deleteMemo);
  
// GetMemoAPI

getMemo = function(req, res) {

    getMemoCallback = function(error, response, body) {
        if(error != null){
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        }else{
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };
        
    request("https://socialmemoryapi.azurewebsites.net/api/Memo"+
            "?itemIdOnSource=" + req.query.itemIdOnSource +
            "&owner=" + req.query.owner,
            getMemoCallback);
  };


router.use('/getMemo', getMemo);
  
// GetMemoesAPI

getMemoes = function(req, res) {

    getMemoesCallback = function(error, response, body) {
        if(error != null){
            res.statusCode = error.statusCode;
            res.headers = error.headers;
            res.body = error.body;
        }else{
            res.statusCode = response.statusCode; // 200
            res.headers = response.headers; // 'image/png'

            res.send(body);
        }
    };
        
    request("https://socialmemoryapi.azurewebsites.net/api/Memo"+
            "?owner=" + req.query.owner,
            getMemoesCallback);
  };


router.use('/getMemoes', getMemoes);