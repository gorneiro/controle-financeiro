const bodyParser = require('body-parser')
const { json } = require('body-parser')
const express = require ('express')
const { send } = require('express/lib/response')
const app = express ()

app.listen(3001, function(){
    console.log("Servidor rodando na porta 3001")    
})
