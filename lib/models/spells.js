'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


// ----------------
// Define Schemas
// ----------------

var spellsSchema = new Schema({
	name: String,
	description: String,
	specialization: String,
	majorMinor: String,
	category: String,
	tags: Array,
	xp: Number
});

// ------------------
// Schema --> Model
// ------------------

mongoose.model('Spells', spellsSchema);