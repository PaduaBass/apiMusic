const File = require('../models/File');

class FileController {
    async store (req, res) {
        const { originalname: name, filename: path, url } = req.file;

        const file = await File.create({ name, path, url });


        return res.json(file);
    };


    async index (req, res) {

        const file = await File.find();


        return res.json(file);
    };
}

module.exports = new FileController();