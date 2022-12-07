const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')

require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())


let mongoDB = `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@${process.env.MONGODB_ATLAS_CLUSTER}.j3rz3.mongodb.net/${process.env.MONGODB_ATLAS_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.once('open',function() {
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

const AppRoutes = require('./routes/app.routes');
app.use('', AppRoutes);



let PORT = process.env.BACKEND_SERVER_PORT;
app.listen(PORT, () => {
    console.log(`$ App listening at http://localhost:${PORT}`)
});