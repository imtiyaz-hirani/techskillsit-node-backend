const mongoose = require('mongoose');

const SubCourseSchema = new mongoose.Schema({
     
    sbtitle: {
        type: String
    },
    sbfee: {
        type: Number
    },
    sbserialno:{
        type: Number
    },
    courseId:{
        type: String
    }
});

module.exports = SubCourse = mongoose.model('subCourse',SubCourseSchema);