var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// MongoDB setup
mongoose.createConnection('mongodb://localhost/furlencode');

module.exports = function(req, res, next) {
    var Schema = mongoose.Schema;
    console.log(req)
    var payment = new Schema({
        CustName:String,
        CustEmail:String,
        CustPhone:String,
        CustCity:String,
        paymentMode:String,
        timeStamp: String,
    });
    mongoose.model('payment', payment);
    var pay = mongoose.model('payment');
    var add_pay = new pay(req.body);
    add_pay.save(function(error, data) {
        res.setHeader('content-type', 'image/gif');
        res.send(data);
    });
    return router;
};