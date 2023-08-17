const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
     
    name: { 
        type: String
    },
    description: {
        type: String
    },
    shortDescription:{
        type: String
    },
    featured:{
        type: Boolean
    },
     trainerId: {
        type: Number
    },
     fee:{
        type: Number
    },
    cfeezoom:{
        type: Number
    },
    introVideoCode:{
        type: String
    },
    keywords:{
        type: String
    },
    technicalWeightage:{
        type: String
    },
    type:{
        type: String
    },
    sequence:{
        type: Number
    },
    trackId:{
        type: String
    }
});

module.exports = Course = mongoose.model('Course',CourseSchema);