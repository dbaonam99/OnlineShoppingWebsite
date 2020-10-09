var User = require("../../models/user.model");
var bcrypt = require('bcrypt');

module.exports.index = async function(req, res) {
	var users = await User.find();
	res.json(users);
};

module.exports.postLogin = async function(req, res) {
	// var email = req.body.email;
	// var password = req.body.password;

	console.log(req.body)

	// var user = await User.findOne({ email: email });

	// if (!user) {
	// 	return res.status(400).send('Email is not found!');
	// }

	// const validPassword = await bcrypt.compare(password, user.password);
	// if (!validPassword) {
	// 	return res.status(400).send('Wrong password!');
	// }

	// res.status(200).send('Login success');
};

module.exports.register = async function(req, res) {
	var email = req.body.email;
	var password = req.body.password;
	var name = req.body.name;
	var age = req.body.age;

	console.log(email, password, name, age);


	var user = await User.findOne({ email: email });

	if (user) {
		return res.status(400).send('Email already exists!');
	}
	
	try {
		const salt = await bcrypt.genSalt();
		req.body.password = await bcrypt.hash(password, salt);
	} catch {}
	console.log(req.body);
	await User.create(req.body);
	res.status(200).send('Register success');
};