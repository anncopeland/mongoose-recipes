const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const detailSchema = new Schema ({
    title: {type: String},
    ingrerdients: {type: String},
    instructions: {type: String},
    comments: {type: String},
});

// define a Schema
const recipeSchema = new Schema({
    title: String,
    ingredients: String,
    instructions: String, 
    comments: String,
    details: [detailSchema]
}, {
    timestamps: true
})
;

// compiled the schema into a model and exported it
module.exports = mongoose.model('Recipe', recipeSchema);

