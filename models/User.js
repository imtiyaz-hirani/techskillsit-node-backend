const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    role:{
        type: String
    },
    email: {
        type: String
    },
    enabled:{
        type: Boolean
    },
    signUpDate:{
        type: Date
    },
    profession:{
        type: String
    },
    contact:{
        type: String
    },
    whatsapp:{
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    companyId:{
        type: String
    },
    emailVerified: {
        type: Boolean
    },
    contactVerified: {
        type: Boolean
    },
    whatsappVerified: {
        type: Boolean
    }

});

module.exports = User = mongoose.model('User',UserSchema);