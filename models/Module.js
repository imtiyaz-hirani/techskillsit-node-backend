const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
     
    name: {
        type: String
    },
    sequence: {
        type: String
    },
     
    courseId:{
        type: Number
    } 
});

module.exports = Module = mongoose.model('Module',ModuleSchema);