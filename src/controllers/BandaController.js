const Banda = require('../models/Banda');
const User = require('../models/User');
const File = require('../models/File');

class BandaController  {
    async store (req, res) {
        const { user_id } = req.query;
        const { name } = req.body;

        const user = User.findById(user_id);
        if(user){
            await Banda.create({ name, user_id });
            return res.json({name, user_id});
        }
        return res.status(401).json({ error: 'Usuario não exite!'});

    }

    async index (req, res){
        const bandas = await Banda.find().populate('avatar_id').populate('logo');
        

        return res.json(bandas);

    }

     async update(req, res) {
        const { id } = req.params;
        const { avatar_id, name, logo } = req.body;
        const banda = await Banda.findById(id);
       
        
        if(banda) {
            await banda.populate('avatar_id').populate('logo').execPopulate();

            await banda.updateOne({
                avatar_id,
                name,
                logo
            });
            


            return res.json(banda);
            
        }      
    }

    async show (req, res) {
        const { id } = req.params;
        const banda = await Banda.findById(id);

        if(banda) {
            await banda.populate('avatar_id').execPopulate();

            return res.json(banda);
        }
    }
}

module.exports = new BandaController();
