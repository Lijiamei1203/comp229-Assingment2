let mongoose = require('mongoose');

// create a model class
let personModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "persons"
});

module.exports = mongoose.model('Person', personModel);