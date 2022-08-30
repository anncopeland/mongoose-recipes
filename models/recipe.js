const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


// define a Schema
const recipeSchema = new Schema({
    title: String,
    ingredients: String,
    instructions: String, 
    comments: String,
})

// compiled the schema into a model and exported it
module.exports = mongoose.model('Recipe', recipeSchema);

