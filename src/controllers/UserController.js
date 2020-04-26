const User = require('../models/User');
const File = require('../models/File');

class UserController  {
    async store (req, res) {
        const { name, email, senha, whatsapp } = req.body;

        const user = await User.findOne({ email });

        if(!user){
            User.create({ name, email, senha, whatsapp});
            return res.json({name, email, senha, whatsapp})
        };
        res.status(401).json({error: "Email já cadastrado!"});       
    }

     async update(req, res) {
        const { email, id, name, avatar_id, whatsapp } = req.body;

        const user = await User.findById(id);
        
        if(user) {
            await user.updateOne(req.body);
            if(req.body.whatsapp) {
                return res.json({
                    id,
                    name,
                    email,
                    avatar_id,
                    whatsapp
                });
            }
            let whatsapp = user.whatsapp;
            return res.json({
                id,
                name,
                email,
                avatar_id,
                whatsapp
            });
            
        }      
    }

    async show (req, res) {
        const { userId } = req.query;
        console.log(userId);
        const user = await User.findById(userId);

        if(user) {
            const file = await File.findById(user.avatar_id);
            return res.json({
                user: {
                    name: user.name,
                    email: user.email,
                    whatsapp: user.whatsapp,
                    file,

                }
                
            })
        }
    }
}

module.exports = new UserController();
