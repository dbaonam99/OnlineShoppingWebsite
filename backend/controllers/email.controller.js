var Email = require("../models/email.model");

var nodemailer = require('nodemailer');
const simpleParser = require('mailparser').simpleParser;

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
	console.log(req.params.idUser)
	console.log(req.params.idEmail)
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

module.exports.getAllEmail = async function(req, res) {
    var imaps = require('imap-simple');
    const _ = require('lodash');
    
    var config = {
        imap: {
            user: '18521118@gm.uit.edu.vn',
            password: 'Dbnbl08081999',
            host: 'imap.gmail.com',
            port: 993,
            tls: true,
            authTimeout: 3000
        }
    };
    
    imaps.connect(config).then(function (connection) {
        return connection.openBox('INBOX').then(function () {
            var delay = 720 * 3600 * 1000;
            var yesterday = new Date();
            yesterday.setTime(Date.now() - delay);
            yesterday = yesterday.toISOString();
            var searchCriteria = ['ALL', ['SINCE', yesterday]];
            var fetchOptions = {
                bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)', 'TEXT', ''],
            };

            return connection.search(searchCriteria, fetchOptions).then(function (messages) {
                let htmlEmail = []
                messages.forEach(function (item) {
                    var all = _.find(item.parts, { "which": "" })
                    var id = item.attributes.uid;
                    var idHeader = "Imap-Id: "+id+"\r\n";
                    simpleParser(idHeader+all.body, (err, mail) => {
                        // console.log(mail.subject)
                        htmlEmail.push(mail.html)
                    });
                });
                setTimeout(()=>{
                    res.send(htmlEmail)
                }, 500)
            });
        });
    });
}