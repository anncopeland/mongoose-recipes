const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema ({
    type: String,
    recipe: {type: Schema.Types.ObjectId, ref: 'Recipe'},
 }, {
    timestamp: true,
})

module.exports = mongoose.model('Ticket', commentSchema);