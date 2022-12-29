const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
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