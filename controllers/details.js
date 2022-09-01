const Recipe = require('../models/recipe');
/*
function showDetails(req, res) {
  Recipe.findById(req.params.id, function(err, recipe){
     res.render('recipe/show', { recipe });
 })
}
*/
function recipeDetails(req, res) {
    Recipe.findById(req.params.id, function(error, recipe){
        //console.log(recipeDetails);
        //recipe.destails.push(req.body);
        recipe.save(function(error){
            res.render('recipes/show', { recipes })
            res.redirect(`/recipes/${recipe._id}`);
        })
     })
 }

module.exports = {
    //showDetails,
    recipeDetails,
}