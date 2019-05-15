module.exports = function(app) {
 
    const spielrunde = require('../controllers/spielrunde.controller.js');
  
    // laden spielrunden
    app.get('/api/spielrunden', spielrunde.findAll);

    // laden spiele nach spielrunde
    app.get('/api/spielrunden/:id', spielrunde.findOne);
}