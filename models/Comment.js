const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    thePost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'thePost'
    }
});

module.exports = mongoose.model('Comment', CommentSchema); 


//This is where you left off. You are looking into .save and basically trying to get the schema to save as an actual schema, and not just the objectID. 