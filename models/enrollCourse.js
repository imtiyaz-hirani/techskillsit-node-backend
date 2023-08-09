const mongoose = require('mongoose');

const EnrollCourseSchema = new mongoose.Schema({
     
    studentId: {
        type: String
    },
    courseId: {
        type: Number
    },
    enrollDate:{
        type: Date 
    }
});

module.exports = EnrollCourse = mongoose.model('enrollCourse',EnrollCourseSchema);