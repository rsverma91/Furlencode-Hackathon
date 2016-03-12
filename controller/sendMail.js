module.exports = function(req, res) {
    var nodemailer = require('nodemailer');
    var fs= require('fs');
    var htmlstream = require('../views/printMail.hbs');
    var html =  htmlstream({
        name: "Shubham"
    })
    // Create a SMTP transport object
    var transport = nodemailer.createTransport("SMTP", {
        auth: {
            user: "hackathonmail@gmail.com",
            pass: "hackbangalore"
        }
    });
    console.log('SMTP Configured');
    // Message object
    var message = {
        from: 'Furlencode',
        // Comma separated list of recipients
        to: "rsverma91@gmail.com, shubhamdiscover@gmail.com, gouravandgourav@gmail.com",
        // Subject of the message
        subject: 'Booked', //
        headers: {
            'X-Laziness-level': 1000
        },
        html: html,
        // An array of attachments
    };
    console.log('Sending Mail');
    transport.sendMail(message, function(error) {
        if (error) {
            console.log('Error occured');
            console.log(error.message);
            return;
        }
        console.log('Message sent successfully!');
        res.end();
    });
};