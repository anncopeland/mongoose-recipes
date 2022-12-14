const Recipe = require('../models/recipe');
//const recipeDetails = require('./details');

// recipe index
function recipesIndex(req, res) {
    Recipe.find({},function(err, recipes){
        if (err) return res.redirect('/');
        res.render('recipes/index', { title: "Southern Comfort", recipes });
    })
}

// new recipe path so we render it
function newRecipe(req, res) {
    //let recipe = {id : req.params.id}
    res.render('recipes/new', {
        title: 'Add Recipe'
    });
}

// replacing show function
function show(req, res) {
    Recipe.findById(req.params.id, function (err, detail) {
    // .find is used to find the recipe
      //Recipe.find({detail: detail._id}, function(err, recipes) {
        // Now you can pass both the recipe and in the res.render call
        res.render("recipes/show", { title: "Recipe Detail", detail });
      });
   // });
  }

function createRecipe(req, res) { 
    const recipe = new Recipe(req.body);
    recipe.save(function(err){
        if (err) return console.log(err)
        console.log(recipe);
        res.redirect('/recipes');
    })
} 
// wrap in a conditional that only allows user to delete their recipe
// use user model
function deleteRecipe(req, res) {
  //if (user && user._id.equals(c.user)) {
    Recipe.findByIdAndDelete(req.params._id, function(err) {
        res.redirect('/recipes');
    });
  }


// this function lets user edit recipe
function editRecipe(req, res) {
    Recipe.findOne({_id: req.params.id}, function(err, recipe) {
      if (err || !recipe) return res.redirect('/recipes');
      res.render('recipes/edit', {title: "Edit Recipe", recipe});
    });
  }
  
  // this function lets user update the edited recipe
  function updateRecipe(req, res) {
    Recipe.findOneAndUpdate(
      {_id: req.params.id},
      // update object with updated properties
      req.body,
      // options object with new: true to make sure updated doc is returned
      {new: true},
      function(err, recipe) {
        if (err || !recipe) return res.redirect('/recipes');
        res.redirect(`/recipes/${recipe.id}`);
      }
    );
  }

  function newComment(req, res) {
    Recipe.findById(req.params.id, function(error, recipe) {
      recipe.comments.push(req.body)
      recipe.save()
        .then(
          res.redirect(`/recipes/${recipe._id}`)
        )
    })
  }
  
  module.exports = {
    recipesIndex,
    newRecipe,
    show,
    createRecipe,
    deleteRecipe,
    editRecipe,
    updateRecipe,
    newComment,
  }