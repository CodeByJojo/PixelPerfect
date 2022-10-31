const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        require: true,
    },
    couldinaryId: {
        type: String,
        require: true,
    },
    caption: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    slotNum: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('Post', PostSchema); 