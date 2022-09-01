const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {type: String, required: true},
    rating: {type: Number, min: 1, max: 5, default: 5},
    // Add the two new properties below
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  
// define a Schema
const recipeSchema = new Schema({
    title: String,
    ingredients: String,
    instructions: String, 
    //embedded commentSchema
    comments: [commentSchema]
}, {
    timestamps: true
})

// compiled the schema into a model and exported it
module.exports = mongoose.model('Recipe', recipeSchema);

