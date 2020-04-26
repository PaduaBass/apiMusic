const mongose = require('mongoose');

const File = new mongose.Schema({
    name: {
        type: String,
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

    File.virtual('_url').get(function() {
    return `${this.url}`
    });

module.exports = mongose.model('File', File);