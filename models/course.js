const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
     
    cname: {
        type: String
    },
    ctrainer: {
        type: String
    },
    cfee:{
        type: Number
    },
    cfeezoom:{
        type: Number
    },
    cdiscount:{
        type: Number
    },
    cimage:{
        type: String
    },
    categoryId:{
        type: String
    }
});

module.exports = Course = mongoose.model('Course',CourseSchema);