const mongoose = require('mongoose');
const SpielRunde = require('./spielrunde.model')

const SpielSchema = mongoose.Schema({
    spielId: Number,
    datum: String,
    gruppe:String,
    stadion: String,
    ort: String,
    team1: String,
    team2: String,
    scoreTeam1: Number,
    scoreTeam2: Number,
    spielRunde : {type: mongoose.Schema.Types.ObjectId, ref: 'SpielRunde'}    
});

module.exports = mongoose.model('Spiel', SpielSchema);