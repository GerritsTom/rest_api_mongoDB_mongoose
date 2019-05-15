const Tipp = require('../models/tipp.model.js');
const User = require('../models/user.model.js');


// Get Tipp
exports.findById = (req, res) => {
    Tipp.findById({_id: req.params.id})
        .populate('spiel')
        .populate('user', 'email')
        .exec(function(err, tipp) {
            if (err) {
                console.log('error occured!')
            } else {
                return res.status(200).json(tipp);    
            }
        });
}

// Create Tipp
exports.create = (req, res) => {
    Tipp.create(req.body, function(err, tipp) {
        if (err) {
            console.log('error saving tipp!' +err);
        } else {
            return res.status(200).json(tipp);
        }
    });    
};

