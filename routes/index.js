var express = require('express');
var router = express.Router();

var indexController = require('../controller/indexController');
var graphController = require('../controller/graphController');
var sendMail = require('../controller/sendMail');


router.get('/', indexController);
router.get('/graph', graphController);
router.get('/sendMail', sendMail);

module.exports = router;
