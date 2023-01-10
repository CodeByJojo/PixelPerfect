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
    userName: {
        type: String,
        required: true,
    },
    thePost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'thePost'
    }
});

module.exports = mongoose.model('Comment', CommentSchema); 


//Where you left off. Still trying to populate the objectId in the post. Look into having a comments section in the controller for posts.