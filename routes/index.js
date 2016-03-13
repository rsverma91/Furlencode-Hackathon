var express = require('express');
var router = express.Router();

var indexController = require('../controller/indexController');
var graphController = require('../controller/graphController');
var chartController = require('../controller/chartController');
var productController = require('../controller/productController');
var paymentController = require('../controller/paymentController');
var dashboardController = require('../controller/dashboardController');
var sendMail = require('../controller/sendMail');

router.get('/', indexController);
router.get('/graph', graphController);
router.get('/chart', chartController);
router.get('/product', productController);
router.get('/payment', paymentController);
router.get('/dashboard', dashboardController);
router.get('/sendMail', sendMail);

module.exports = router;
