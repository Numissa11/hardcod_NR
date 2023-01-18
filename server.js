const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 6868
app.use(express.json())

app.get('/api/my-app', (req, res) => {
    res.send({
        msg: 'Hi hi my friends ! '
    })
})

app.listen(PORT, () => {
    console.log(`server listen on port: ${PORT}` )
})