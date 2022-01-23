const database = require('../models')

class ReceitaController {
    static async pegaTodaReceita(req,res){
        try{
            const todasAsReceitas = await database.receitas.findAll()
            return res.status(200).json(todasAsReceitas)
        } catch(error){
            res.status(500).json(error.message)
        }
        
    }
}

module.exports = ReceitaController