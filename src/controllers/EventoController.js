const Evento = require('../models/Evento');
module.exports = {
    async store (req, res) {
        const { title, data, location, description, banda_id } = req.body;

        const evento = await Evento.create({title, data, location, description, banda_id});
        
        return res.json(evento);

    },

    async index (req, res) {
        const { banda_id } = req.query; 
        const evento = await Evento.find({ banda_id : banda_id}).populate('avatar_id');

        return res.json(evento);
    },

    async update(req, res) {
        const { id } = req.params;
        const { avatar_id } = req.body;
        const evento = await Evento.findById(id);
       
        
        if(evento) {
            await evento.populate('avatar_id').execPopulate();

            await evento.updateOne({
                avatar_id,
            });
            


            return res.json(evento);
            
        }      
    }
}