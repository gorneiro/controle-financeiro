const { Router } = require ('express')

const ReceitaController = require('../controller/ReceitaController')

const router = Router()

router.get('/receitas', ReceitaController.pegaTodaReceita)

module.exports = router