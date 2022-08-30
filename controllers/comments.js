const Recipe = require('../models/recipe');

function addComment(req, res) {
    // find the recipe to embed the comments within
    Recipe.findById(req.params.id, function(err, recipes) {
        // Add the user-centric info to req.body (the new comment)
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;

        // Push the subdoc for the comment
        recipe.comments.push(req.body);
        // Always save the top-level document (not subdocs)
        recipe.save(function (err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}

function deleteComment(req, res, next) {
    Movie.findOne({'comments._id': req.params.id}).then(function (recipe) {
        const comment = movie.comments.id(req.params.id);
        if (!comment.user.equals(req.user._id)) return res.redirect(`/recipes/${recipe._id}`);
        review.remove();
        movie.save().then(function () {
            res.redirect(`/recipes/${recipe._id}`);
        }).catch(function (error) {
            return next(error);
        })
    })
}
  
module.exports = {
    addComment,
    deleteComment,
}