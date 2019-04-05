const mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost:27017/webdb', {useNewUrlParser: true});

// schema
const email = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String
},{
    versionKey: false
});

module.exports = mongoose.model('Email', email);