const mongose = require('mongoose');

const Banda = new mongose.Schema({
    name: {
        type: String,
        required: true,
    },
    album_id: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Album'
    },
    avatar_id: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'File',
    },
    logo: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'File',
    },
    agenda_id: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Agenda'
    },
    user_id: { 
        type: mongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }


});

module.exports = mongose.model('Banda', Banda);