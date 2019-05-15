const SpielRunde = require('../models/spielrunde.model.js');

// FETCH Spierunden
exports.findAll = (req, res) => {
    SpielRunde.find()
    .then(response => {
        res.json(response);
    }).catch(err => {
        res.status(500).send({
            msg: err.message
        });
    });
};

// FIND Spiele nach Spielrunde
exports.findOne = (req, res) => {
    SpielRunde.findOne({spielRundeId: req.params.id})
    .populate('spiele')
    .exec(function(err, response) {
        if (err) {
            return res.status(404).json({
                msg: "Spielrunde not found with id " + req.params.id
            });
        }
        console.log(response);
        res.json(response);
    }) 
    /*
    .then(spielrunde => {
        if(!spielrunde) {
            return res.status(404).json({
                msg: "Spielrunde not found with id " + req.params.id
            });            
        }
        res.json(spielrunde);
    }) */
    /*
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "Spielrunde not found with id " + req.params.id
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving Spielrunde with id " + req.params.id
        });
    }); */
};