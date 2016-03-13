var unirest = require('unirest');

module.exports = function(req, res) {
	url ="http://localhost:3000/api/prodAvailable/getAll";
	unirest.get(url).header('Accept', 'application/json').end(function(response) {
		console.log(response.body);
           res.render('product', {
		        title: "Furlencode",
		        data: response.body
		    });
    });
};