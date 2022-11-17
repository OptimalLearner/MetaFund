const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const AppRoutes = require('./routes/app.routes');
app.use('', AppRoutes);

let PORT = process.env.BACKEND_SERVER_PORT;
app.listen(PORT, () => {
    console.log(`$ App listening at http://localhost:${PORT}`)
});