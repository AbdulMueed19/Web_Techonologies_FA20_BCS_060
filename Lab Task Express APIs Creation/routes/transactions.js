const express = require('express');
const router = express.Router();
const transaction = require('../models/transaction');
module.exports = router;

//Getting all transactions
router.get('/', async (req, res) => {
try{
    const transactions = await transaction.find();
    res.json(transactions);
}catch(err){
    res.status(500).json({message: err.message});
}
});
//Getting One transaction
router.get('/:id', async (req, res) => {
    try {
        const Transaction = await transaction.findById(req.params.id);
        if (Transaction) {
            res.json(Transaction);
        } else {
            res.status(404).json({ error: 'Transaction not found' });
        }
    } catch (error) {
        console.error('Error acquiring transaction:', error);
        res.status(500).json({ error: 'Failed to acquire transaction' });
    }
});

//Creating one transaction
router.post('/', async (req, res) => {
    try {
        const {
            transactionId,
            transactionCreatedBy,
            transactionAmount,
            transactionDescription,
            transactionCreatedTo
        } = req.body;

        const newTransaction = new transaction({
            transactionId,
            transactionCreatedBy,
            transactionAmount,
            transactionDescription,
            transactionCreatedTo
        });

        const createdTransaction = await newTransaction.save();
        res.status(201).json(createdTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

