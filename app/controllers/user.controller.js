const Tipp = require('../models/tipp.model.js');
const User = require('../models/user.model.js');


// Get Tipp
exports.findAll = (req, res) => {
    User.findById({_id: req.params.id})
        .populate('tipps')
        .exec(function(err, user) {
            if (err) {
                console.log('error occured!')
            } else {
                return res.status(200).json(user);    
            }
        });
}
