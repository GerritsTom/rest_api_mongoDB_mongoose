module.exports = function(app) {
 
    const spiel = require('../controllers/spiel.controller.js');
  

    // laden spiele nach spielrunde
    app.get('/api/spiele/:id', spiel.findOne);
}