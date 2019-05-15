
const mongoose = require('mongoose');
const Spiel = require('./spiel.model')

const SpielRundeSchema = mongoose.Schema({
    spielRundeId: String,
    datum: String,
    umschreibung: String,
    typ: String,
    spiele: [{type: mongoose.Schema.Types.ObjectId, ref: 'Spiel'}]
});

module.exports = mongoose.model('Spielrunde', SpielRundeSchema);