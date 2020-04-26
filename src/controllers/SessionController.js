const User = require('../models/User');
module.exports = {
    async store(req, res) {
        const {email, senha} = req.body;
        
        const user = User.findOne({ email: user.email, senha: user.senha})
        if(user) {
            return res.json(user);
        }

        return res.status(401).json({ error: 'Usuario nao encontrado!' });
    } 


}