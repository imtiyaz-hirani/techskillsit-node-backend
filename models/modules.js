const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
     
    mtitle: {
        type: String
    },
    mpriority: {
        type: String
    },
    mserialno:{
        type: Number
    },
    subCourseId:{
        type: Number
    } 
});

module.exports = Module = mongoose.model('module',ModuleSchema);