const express = require ('express')
const routes = require('./routes')
const app = express ()

routes(app)

app.listen(3001, function(){
    console.log("Servidor rodando na porta 3001")    
})

module.exports = app