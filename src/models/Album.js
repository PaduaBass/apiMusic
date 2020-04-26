const mongose = require('mongoose');

const Album = new mongose.Schema({
    name: {
        type: String,
        required: true,
    },
    avatar_id: {
        type: String,
    },
    files: {
        type: String,
    }



});

module.exports = mongose.model('Album', Album);