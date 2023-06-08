const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
    },
    filetype: {
        type: String,
        required: true,
    },
    size: {
        type: Number,
        required: true,
    },
    extension: {
        type: String,
        required: true,
    },
});

const MediaModel = mongoose.model('MediaModel', mediaSchema);

module.exports = MediaModel;
