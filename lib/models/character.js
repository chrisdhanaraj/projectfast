'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


// ----------------
// Define Schemas
// ----------------

var characterSchema = new Schema({
	name: String,
	attributes: {
		strength: Number,
		agility: Number,
		combat: Number,
		magic: Number,
		willpower: Number,
		perception: Number
	},
	spells: [{ type: Schema.Types.ObjectId, ref: 'Spells' }],
	author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	xp: {
		type: Number,
		default: 150
	}
});

// -----------
// Methods
// -----------


// ------------------
// Schema --> Model
// ------------------

mongoose.model('Characters', characterSchema);