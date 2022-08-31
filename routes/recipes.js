var express = require('express');
var router = express.Router();
// pulling in controller/logic
const recipesCtrl = require('../controllers/recipes');
// Require the auth middleware
const isLoggedIn = require('../config/auth');

//router.get('/auth/goggle');

// setting up routes
/* GET recipes listing. */
// http://localhost:3000/recipes/index
router.get('/', recipesCtrl.recipesIndex);

// GET /recipes/new (new functionality)
// http://localhost:3000/recipes/new
router.get('/new', recipesCtrl.newRecipe);

router.get('/:id', recipesCtrl.show);
// POST /recipes
router.post('/', recipesCtrl.createRecipe);
//router.delete('/:id', recipesCtrl.deleteRecipe);
//router.post('/', isLoggedIn, recipesCtrl.create);

module.exports = router;