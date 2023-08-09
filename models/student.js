const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
     
    sname: {
        type: String
    },
    scontact: {
        type: String
    },
    scity:{
        type: String
    },
    saddress:{
        type: String
    }
});

module.exports = Student = mongoose.model('student',StudentSchema);