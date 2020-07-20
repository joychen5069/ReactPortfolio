// Loading environmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL,
		pass: process.env.PASSWORD
	}
});

let mailOptions = {
	from: 'kapu5069@gmail.com',
	to: 'joychen5069@gmail.com',
	subject: 'test',
	text: 'email works'
};

transporter.sendMail(mailOptions, (err, data) => {
	if (err) {
		console.log(err, "error")
	}
	else {
		console.log("email sent")
	}
}
);
