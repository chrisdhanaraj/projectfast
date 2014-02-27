'use strict';

var mongoose = require('mongoose'),
    Spells = mongoose.model('Spells');

// -----------------
// List all spells
// -----------------

exports.all = function(req, res) {
    Spells.find( function (err, spells) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(spells);
        }
    });
};

// ------------------------
// Get product ID
// by name
// ------------------------

exports.getId = function(req, res) {
    Spells.findOne({name: req.params.name}, function(err, spells) {
        if (err) {
            res.render( 'error', {
                status: 500
            });
        } else {
            res.jsonp(spells._id);
        }
    });
};

// -------------------
// Get products 
// by specialization
// -------------------

exports.getProductBySpecs = function(req, res) {
    Spells.find({specialization: req.params.specialization}, function(err, spells) {
        if (err) {
            console.log(err);
        } else {
            res.jsonp(spells);
        }
    });
};


// ----------------------
// Show Single Product 
// by ID
// ----------------------

exports.show = function(req, res) {
    Spells.findById(req.params.id, function (err, spells) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(spells);
        }
    });
};

// ----------------
// Update by ID
// ----------------

exports.update = function(req, res) {
    Spells.findById(req.params.id, function (err, spells) {
        spells.name = req.body.name;
        spells.description = req.body.description;
        spells.specialization = req.body.specialization;
        spells.majorMinor = req.body.majorMinor;
        spells.category = req.body.category;
        spells.tags = req.body.tags;
        spells.xp = req.body.xp;

        spells.save(function(err) {
            if (err) {
                console.log('not updated');
            } else {
                console.log('updated');
            }
        });
    });
};

// ------------------
// Create a spell
// ------------------

exports.create = function(req, res) {
    var spells;
    console.log('POST: ');
    console.log(req.body);

    spells = new Spells({
        name: req.body.name,
        description: req.body.description,
        specialization: req.body.specialization,
        majorMinor: req.body.majorMinor,
        category: req.body.category,
        tags: req.body.tags,
        xp: req.body.xp
    });

    spells.save (function (err) {
        if (err) {
            console.log('Could not create');
            console.log(err);
        } else {
            res.jsonp(spells);
            return console.log('created');
        }
    });
};