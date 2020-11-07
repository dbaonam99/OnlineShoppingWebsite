var User = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 	

module.exports.index = async function(req, res) {
	var users = await User.find();
	res.json(users);
};
module.exports.info = function(req, res) {
	var id = req.params.id;
	User.findById({ _id: id }).then(function(users) {
		res.json(users);
		console.log(users)
	})
}
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

	const token = jwt.sign({user}, 'hahaha');
	res.status(200).json({token: token, user: user});
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
		userAvt: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/73321413_146697059956770_7174055866474168320_n.jpg?_nc_cat=107&ccb=2&_nc_sid=09cbfe&_nc_ohc=ni-Cr2_KyP0AX-BfQkv&_nc_ht=scontent-sin6-1.xx&oh=9cbda6699093e8dbb061a92c5bb58c7e&oe=5FCB1CFC",
		userName: req.body.registerName,
		userTinh: "",
		userHuyen: "",
		userFullName: "",
		userEmail: email,
		userPassword: req.body.password
	}

	await User.create(data);
	res.status(200).send('Register success');
}
module.exports.updateUser = async function(req, res) {
	var id = req.params.id;
 
	if (req.files.length > 0) {
		const imgArr = [];
		req.files.map((item)=>{
			imgArr.push(`http://localhost:4000/${item.path.split("/").slice(1).join("/")}`)
		})
		const img = {
			userAvt: imgArr[0]
		}
		User.findByIdAndUpdate(
			{_id: id}, img,
			function (error) {
			}
		)
	}

	const data = {
		userName: req.body.userName,
		userEmail: req.body.userEmail,
		userTinh: req.body.userTinh,
		userHuyen: req.body.userHuyen
	}

	// userPassword
	console.log(data)

	await User.findByIdAndUpdate(
		{_id: id}, data,
		function (error) {
		}
	)

	var user = await User.findOne({ _id: id });

	const token = jwt.sign({user}, 'hahaha');
	res.status(200).json({token: token, user: user});
}
