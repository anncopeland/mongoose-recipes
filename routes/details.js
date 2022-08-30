var express = require('express');
var router = express.Router();
const detailsCtrl = require('../controllers/details')

//router.get('/:id/details', detailsCtrl.showDetails);

// POST /recipes/details
// http://localhost:3000/recipes/details
//router.post('/recipes/:id/details', detailsCtrl.recipeDetails);
//router.delete('/details/:id', detailsCtrl.delete);

module.exports = router;