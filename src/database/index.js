const mongoose =  require('mongoose');

class Database {
    constructor() {
        this.mongo();
    }
    mongo() {
        this.mongoConnection = mongoose.connect('mongodb+srv://root:root@cluster0-3renw.mongodb.net/music?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true 
        });
    }
}

module.exports = new Database();