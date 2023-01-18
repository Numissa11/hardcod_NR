const express = require('express')
const path = require('path')
require('dotenv').config()
const app = express()

const PORT = 6868

app.use(express.json())

app.use(express.static('front/build'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './front/build/index.html'))
})

app.get('/api/my-app', (req, res) => {
    res.send({
        msg: 'Hi hi my friends ! '
    })
})

app.listen(PORT, () => {
    console.log(`server listen on port: ${PORT}` )
})