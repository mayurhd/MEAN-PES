const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const playerSchema = new Schema({
	name: String,
	OPR: Number,
	club: String,
	nationality: String,
	rarity: String
});
module.exports = mongoose.model('Player',playerSchema,'players')