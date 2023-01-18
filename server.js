const express = require('express')
// va chercher le path relatif pour acceder à notre fichier 
//ex: si on est sur un serveur et les fichiers sont ailleurs pour y accéder, 
// on a besoin du path pour dire ou se trouve le index.html exactement
const path = require('path')
require('dotenv').config()
const app = express()

const PORT = 6868

// dit à app: utilise json au besoin
app.use(express.json())

// dit à app: utilise des fichiers static, voici où les trouver
app.use(express.static('front/build'))

// renvoie sur toutes les adresse ce fichier html
// react fait une seule gross page qui est le index.html et nous renvoie ca
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})

// renvoie ce message au front
app.get('/api/my-app', (req, res) => {
    res.send({
        msg: 'Hi hi my friends ! '
    })
})

// app connecté au port
app.listen(PORT, () => {
    console.log(`server listen on port: ${PORT}` )
})