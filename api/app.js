const express = require('express')
const app = express();
const cors = require('cors')
const axios = require('axios')

app.use(cors())
app.use(express.json())

const usuarios = [];

app.get('/users', (req, res) => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(response => { 
        const allUsers = usuarios.concat(response.data)
        res.status(200).json(allUsers)
    })
})

app.post('/create', (req, res) => {
    const user = req.body;

    usuarios.push(user)
    console.log(usuarios, usuarios.length)
    res.status(201).send('Usuario Creado')
})

app.listen(3001, console.log('Port 3001'))