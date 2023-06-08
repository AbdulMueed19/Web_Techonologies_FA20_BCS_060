const express = require('express');
const app = express();
const mongoose = require('mongoose').mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const axios = require('axios');
const transactionAPI = 'http://localhost:4000/transactions';

app.set('view engine', 'ejs');


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
app.use(express.json())
app.use(express.static('public'));
const transactionsRouter = require('./routes/transactions');
app.use('/transactions', transactionsRouter);
const userRegistrationRouter = require('./routes/registration');
const userLoginRouter = require('./routes/login');
app.use('/registration', userRegistrationRouter);
app.use('/login', userLoginRouter);


app.listen(4000)

