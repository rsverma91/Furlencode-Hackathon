var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// MongoDB setup
mongoose.createConnection('mongodb://192.168.2.97/furlencode');

module.exports = function(req, res, next) {
    var Schema = mongoose.Schema;
    var pushTrack = new Schema({
        pageName: String,
        timeStamp: String,
        trackingText: String,
        eventType: String,
        options: Object
    });
    mongoose.model('pushTrack', pushTrack);
    var ptrack = mongoose.model('pushTrack');
    router.get('/p.gif', function(req, res) {
        var data = JSON.parse(req.query.data);
        var add_ptrack = new ptrack(data);
        add_ptrack.save(function(error, data) {
            res.setHeader('content-type', 'image/gif');
            res.send();
        });
    });
    router.get('/getAll', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ptrack.find(function(error, data) {
            res.send(data);
        });
    });
    /*
    router.get('/getByCityName/:cityName', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ptrack.find({
            cityName: req.params.cityName
        }, function(error, data) {
            res.send(data);
        });
    });
    router.get('/getBetTS/:minTM/:maxTM', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        ptrack.find({
            timeStamp: {
                $gte: req.params.minTM,
                $lte: req.params.maxTM
            }
        }, function(error, data) {
            res.send(data);
        });
    });*/
    return router;
};