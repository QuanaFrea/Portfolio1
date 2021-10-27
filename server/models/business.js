

let mongoose = require('mongoose');

//create model class
let businessModel = mongoose.Schema({
    name: String,
    email: String,
    number: Number
},
{
    collection: "lists"
});

module.exports = mongoose.model('Business', businessModel)
