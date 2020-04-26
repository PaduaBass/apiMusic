const mongose = require('mongoose');

const Music = new mongose.Schema({
    name: {
        type: String,
    },
    banda_id: {
        type: mongose.Types.ObjectId,
        ref: 'Banda'
    },
    path: {
        type: String,
    },
    url: {
        type: String,
        get() {
            return `http://localhost:3333/files/${this.path}`;
        }
    },
    
}, {
    toJSON: {
        virtuals: true,
    }
});

    Music.virtual('music_url').get(function() {
    return `${this.url}`
    });

module.exports = mongose.model('Music', Music);