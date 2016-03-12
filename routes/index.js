var express = require('express');
var router = express.Router();

var indexController = require('../controller/indexController');
var graphController = require('../controller/graphController');


router.get('/', indexController);
router.get('/graph', graphController);


module.exports = router;
