const Music = require('../models/Music');

class MusicController {
    async store (req, res) {
        const { originalname: name, filename: path, url } = req.file;
        const { userId } = req.query;
        console.log(userId);

        const music = await Music.create({ name, path, url,  });


        return res.json(music);
    };


    async index (req, res) {

        const music = await Music.find();


        return res.json(music);
    };
}

module.exports = new MusicController();