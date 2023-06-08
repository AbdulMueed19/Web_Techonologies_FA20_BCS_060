const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    transactionId: {
        type: String,
        required: true
    },
    transactionCreatedAt: {
        type: Date,
        required: false,
        default: Date.now
    },
    transactionCreatedBy: {
        type: String,
        required: true
    },
    transactionAmount: {
        type: Number,
        required: true
    },
    transactionDescription: {
        type: String,
        required: true
    },
    transactionCreatedTo: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Transaction', transactionSchema);