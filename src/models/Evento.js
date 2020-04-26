const mongose = require('mongoose');

const Evento = new mongose.Schema({
    title: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
    avatar_id: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'File'
    },
    location: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    banda_id: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'Banda',
        required: true,
    }


});

module.exports = mongose.model('Evento', Evento);