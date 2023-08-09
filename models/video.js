const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
     
    vtitle: {
        type: String
    },
    vplaylength: {
        type: Number
    },
    vserialno:{
        type: Number
    },
    moduleId:{
        type: Number
    },
    vcode:{
        type: Number
    }
});

module.exports = Video = mongoose.model('video',VideoSchema);