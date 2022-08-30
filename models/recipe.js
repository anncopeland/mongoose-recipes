const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    comment: String,
 })

// define a Schema
const recipeSchema = new Schema({
    title: String,
    ingredients: String,
    instructions: String, 
    comments: [commentSchema]
}, {
    timestamps: true
})


// compiled the schema into a model and exported it
module.exports = mongoose.model('Recipe', recipeSchema);

