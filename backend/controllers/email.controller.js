var Email = require("../models/email.model");

var nodemailer = require('nodemailer');

// Login with admin email
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '18521118@gm.uit.edu.vn',
        pass: 'Dbnbl08081999'
    }
})
transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else { 
    }
});

module.exports.index = async function(req, res) {
    console.log("cc")
    res.send('<img src="https://picsum.photos/200/300"/>')
}

module.exports.postEmail = async function(req, res) {
    var email = req.body.subscriber;
	var emailData = await Email.findOne({ subscriberEmail: email });
	if (emailData) {
		return res.status(400).send('Email already subscriber!');
	}
    await Email.create({ subscriberEmail: email })

    var mailOptions = {
        from: '18521118@gm.uit.edu.vn',
        to: email,
        subject: 'Cảm ơn bạn đã đăng kí nhận tin mới tại SOBER shop',
        text: 'Cảm ơn bạn đã đăng kí nhận tin mới tại SOBER shop'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    })

	res.status(200).send('Subscriber for news successful!');
}
