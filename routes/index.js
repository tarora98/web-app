var express = require('express');
var index = require('../models/user');
var router = express.Router();
/* GET home page. */
router.get('/', ensureAuthenticated, function (req, res, next) {
	res.render('index');
});


router.post('/', function (req, res, next) {
	var Firstname = req.body.Firstname;
	var lastname = req.body.lastname;
	var Gender = req.body.Gender;
	var Age = req.body.Age;
	// var birthday = req.body.birthday;
	// // Form Validator
	req.checkBody('Firstname', 'Name field is required').notEmpty();
	req.checkBody('lastname', 'Email field is required').notEmpty();
	req.checkBody('Age', 'Age required').notEmpty();
	req.checkBody('birthday', 'DOB required').notEmpty();
	req.checkBody('Gender', 'Password field is required').notEmpty();

	// Check Errors
	var errors = req.validationErrors();

	if (errors) {
		res.render('details', {
			errors: errors
		});
	} else {
		var info = new index({
			Firstname: Firstname,
			lastname: lastname,
			// Age: Age,
			// birthday: birthday
		});

		details.createUser(info, function (err, user) {
			if (err) throw err;
			console.log(user);
		});

		req.flash('success', 'You enter the correct details');

		// res.location('/next');
		// res.redirect('/next');
	}
});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
