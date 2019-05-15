module.exports = function(app) {
 
    const tippController = require('../controllers/tipp.controller.js');
  
    // Get Tipp
    app.get('/api/tipps/:id', tippController.findById);    

    // Create new Tipp
    app.post('/api/tipps', tippController.create);    
}