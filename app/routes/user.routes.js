module.exports = function(app) {
 
    const userController = require('../controllers/user.controller.js');
  
    // Get Tipps by User
    app.get('/api/user/:id/tipps', userController.findAll);    

}