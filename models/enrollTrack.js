const mongoose = require('mongoose');

const EnrollTrackSchema = new mongoose.Schema({
     
    trackId: {
        type: String
    },
    studentID: {
        type: Number
    },
    enrollDate:{
        type: Date 
    }
});

module.exports = EnrollTrack = mongoose.model('subCourse',EnrollTrackSchema);