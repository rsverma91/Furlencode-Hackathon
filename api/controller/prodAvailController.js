var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// MongoDB setup
mongoose.createConnection('mongodb://localhost/furlencode');

module.exports = function(req, res, next) {
    var Schema = mongoose.Schema;
    var prodAvail = new Schema({
        uniqueId: String,
        prodName: String,
        Available: String,
    });
    mongoose.model('prodAvail', prodAvail);
    var prodAv = mongoose.model('prodAvail');
    router.get('/update', function(req, res) {
        var data = JSON.parse(req.query.data);
        var add_prodAv = new prodAv(data);
        add_prodAv.save(function(error, data) {
            res.send();
        });
    });
    router.get('/getAll', function(req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        prodAv.find(function(error, data) {
            res.send(data);
        });
    });
    return router;
};