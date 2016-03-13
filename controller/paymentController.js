module.exports = function(req, res) {
	var product  = req.body.product.split(";").join(", ");
	var price =  req.body.price;
    res.render('payment', {
        title: "Furlenco - Payment",
        price: price,
        product: product
    });
};