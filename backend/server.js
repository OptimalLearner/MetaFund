const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`$ App listening at http://localhost:${PORT}`)
});