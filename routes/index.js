var express = require('express');
var router = express.Router();

var indexController = require('../controller/indexController');
var graphController = require('../controller/graphController');
var productController = require('../controller/productController');
var sendMail = require('../controller/sendMail');

router.get('/', indexController);
router.get('/graph', graphController);
router.get('/product', productController);
router.get('/sendMail', sendMail);

module.exports = router;
