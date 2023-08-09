const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
     
    catname: {
        type: String
    },
    catpriority: {
        type: Number
    } 
});

module.exports = Category = mongoose.model('category',CategorySchema);