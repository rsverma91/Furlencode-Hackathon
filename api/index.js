var express = require('express');
var app = express();

var pageHitController = require('./controller/pageHitController');
var pushTrackingController = require('./controller/pushTrackingController');

module.exports = function() {
    var router = express.Router();
    
    router.use('/pageHitCount', pageHitController());
    router.use('/pushTracking', pushTrackingController());
    
    return router;
};