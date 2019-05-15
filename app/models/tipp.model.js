const mongoose = require('mongoose');
const Spiel = require('./spiel.model');
const User = require('./user.model');

const TippSchema = mongoose.Schema({
    scoreTeam1: Number,
    scoreTeam2: Number,
    createdAt: Date,
    changedAt: Date,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    spiel : {type: mongoose.Schema.Types.ObjectId, ref: 'Spiel'}    
});

TippSchema.pre("create", function(next) {
    let now = new Date();
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });

module.exports = mongoose.model('Tipp', TippSchema);