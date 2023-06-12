const express = require('express');
const app = express();
const mongoose = require('mongoose').mongoose;
const axios = require('axios');
const transactionAPI = 'http://localhost:4000/transactions';

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoString = 'mongodb+srv://admin:123@coinverse.guonfyd.mongodb.net/';


// Connection URL
mongoose
    .connect(mongoString)
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(transactionAPI);
        const transactions = response.data;

        res.render('home', { transactions });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});
app.get('/signup', (req, res) => {
    res.render('signup');
});
app.get('/send', (req, res) => {
    res.render('send');
});
app.use(express.json())
app.use(express.static('public'));
const transactionsRouter = require('./routes/transactions');
app.use('/transactions', transactionsRouter);
const userRegistrationRouter = require('./routes/registration');
app.use('/registration', userRegistrationRouter);



app.listen(4000)

