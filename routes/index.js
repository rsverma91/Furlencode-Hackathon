var express = require('express');
var router = express.Router();

var indexController = require('../controller/indexController');


router.get('/', indexController);


module.exports = router;
