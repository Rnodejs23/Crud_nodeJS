const express = require('express');
const bodyParser = require('body-parser');

const book = require('./route/book.route');
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://richie:books01@ds133632.mlab.com:33632/books_api';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/books', book);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});