var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// MongoDB setup
mongoose.connect('mongodb://192.168.2.97/furlencode');
module.exports = function(req, res, next) {
    var Schema = mongoose.Schema;
    var pageHit = new Schema({
        pageName: String,
        timeStamp: String,
        lat: String,
        lng: String
    });
    mongoose.model('pageHit', pageHit);
    var phit = mongoose.model('pageHit');
    
    router.get('/a.gif', function(req, res) {
        var data = {
            pageName : req.query.pageName,
            timeStamp : req.query.timeStamp,
            lat : req.query.lat,
            lng : req.query.lng
        }
        var add_user = new phit(data);
        add_user.save(function(error, data) {
            //var img = document.createElement('img');
            res.setHeader('content-type', 'image/gif');
            //res.writeHead(200, {'Content-Type': 'image/gif' });
            res.send();
        });
    });
    router.get('/getAll', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        phit.find(function (error, data) {
            res.send(data);
        });
    });
    return router;
};