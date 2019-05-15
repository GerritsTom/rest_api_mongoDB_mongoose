const Spiel = require('../models/spiel.model.js');

// FETCH Spierunden
exports.findOne = (req, res) => {
    
    Spiel.findOne({spielId : req.params.id} )
    .then(response => {
        if(!response) {
            return res.status(404).json({
                msg: "Spiel not found with id " + req.params.id
            });            
        }
        return res.status(200).json({
            message: 'OK',
            spiel: response
        });
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};
