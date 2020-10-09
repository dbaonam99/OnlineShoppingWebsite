var User = require("../models/user.model");
const bcrypt = require('bcrypt');

module.exports.index = async function(req, res) {
	var users = await User.find();
	res.json(users);
};

module.exports.postLogin = async function(req, res) {
	var email = req.body.loginEmail;
	var password = req.body.loginPassword;

	var user = await User.findOne({ userEmail: email });

	if (!user) {
		return res.status(400).send('Email is not found!');
	}

	const validPassword = await bcrypt.compare(password, user.userPassword);
	if (!validPassword) {
		return res.status(400).send('Wrong password!');
	}

	res.status(200).send('Login success');
};

module.exports.register = async function(req, res) {
	var email = req.body.registerEmail;
	var password = req.body.registerPassword;

	var user = await User.findOne({ userEmail: email });

	if (user) {
		console.log("check")
		return res.status(400).send('Email already exists!');
	}
	
	try {
		const salt = await bcrypt.genSalt();
		req.body.password = await bcrypt.hash(password, salt);
	} catch {}

	const data = {
		userName: req.body.registerName,
		userEmail: email,
		userPassword: req.body.password
	}

	await User.create(data);
	res.status(200).send('Register success');
}