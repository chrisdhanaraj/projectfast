'use strict';

var mongoose = require('mongoose'),
    Character = mongoose.model('Characters');

// -------------------------------------
// List characters created by user
// -------------------------------------

exports.all = function(req, res) {
	var userId = req.user._id;

    Character.find({author: userId }, function (err, character) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(character);
        }
    });
};

// --------------------
// Create character 
// --------------------

exports.create = function(req, res) {
	var userId = req.user._id;

	var character = new Character({
		name: req.body.name,
		attributes: {
			strength: req.body.strength,
			agility: req.body.agility,
			combat: req.body.combat,
			magic: req.body.magic,
			willpower: req.body.willpower,
			perception: req.body.perception
		},
		spells: '',
		author: userId,
		xp: 150
	});

	character.save (function (err) {
		if (err) {
            console.log('Could not create');
            console.log(err);
        } else {
            res.jsonp(character);
            return console.log('created');
        }
	});
};

// -------------------
// Update character
// -------------------

exports.update = function(req, res) {
	Character.findById(req.params.id, function (err, character) {
		character.name = req.body.name;
		character.attributes = {
			strength: req.body.strength,
			agility: req.body.agility,
			combat: req.body.combat,
			magic: req.body.magic,
			willpower: req.body.willpower,
			perception: req.body.perception
		};
		character.spells = req.body.spells;
		character.xp = req.body.xp;

		character.save( function(err) {
			if (err) {
				console.log (err);
			} else {
				res.jsonp(character);
			}
		});
	});
};

// -------------------
// Delete Character
// -------------------

exports.destroy = function(req, res) {
    var character = req.character;

    character.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                character: character
            });
        } else {
            res.jsonp(character);
        }
    });
};