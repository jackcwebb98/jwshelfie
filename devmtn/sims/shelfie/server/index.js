require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')

const ctrl = require('./controller')

const app = express();
app.use(bodyParser.json())
const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance)
    console.log('Connceted to database')
    app.get(`/api/inventory`, ctrl.getAll)
    app.post('/api/product', ctrl.createProduct)
    app.delete('/api/product/:id', ctrl.deleteProduct)
    
})



const PORT = 4000
app.listen(PORT, () => console.log(`we good on port ${PORT}`))


// app.listen(PORT, () => console.log(`we good on port ${PORT}`))