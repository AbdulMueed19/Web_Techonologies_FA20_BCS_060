const express = require('express');
const app = express();
const mongoose = require('mongoose').mongoose;
const mediaRoutes = require('./routes/mediaRoute');
const path = require('path');

// Connect to MongoDB

const mongoString = 'mongodb+srv://admin:123@coinverse.guonfyd.mongodb.net/';

mongoose
    .connect(mongoString)
    .then(() => {
        console.log('Database Connected');
    })
    .catch((error) => {
        console.error('Error connecting to database:', error);
    });

app.use(express.json());
app.use('/api/media', mediaRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});