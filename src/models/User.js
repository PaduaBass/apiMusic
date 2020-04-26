const mongose = require('mongoose');

const User = new mongose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    avatar_id: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'File'
    },
    senha: {
        type: String,
        required: true,
    }, 

});

module.exports = mongose.model('User', User);