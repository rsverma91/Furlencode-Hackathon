var express = require('express');
var app = express();
var pageHitController = require('./controller/pageHitController');


module.exports = function() {
    var router = express.Router();
    
    router.use('/pageHitCount', pageHitController());
    return router;
};