var express = require('express');
var app = express();

var pageHitController = require('./controller/pageHitController');
var pushTrackingController = require('./controller/pushTrackingController');
var doPaymentController = require('./controller/doPaymentController');
var prodAvailController = require('./controller/prodAvailController');

module.exports = function() {
    var router = express.Router();
    
    router.use('/pageHitCount', pageHitController());
    router.use('/pushTracking', pushTrackingController());
    router.post('/doPayment', doPaymentController);
    router.use('/prodAvailable', prodAvailController());
    
    return router;
};