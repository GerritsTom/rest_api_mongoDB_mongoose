const mongoose = require('mongoose');
const Tipp = require('./tipp.model')

const UserSchema = mongoose.Schema({
    email: String,
    password: String,
    createdAt: Date,
    tipps : [{type: mongoose.Schema.Types.ObjectId, ref: 'Tipp'}]    
});

module.exports = mongoose.model('User', UserSchema);
