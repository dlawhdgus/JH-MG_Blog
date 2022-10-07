const express = require('express')
const app = express()
const config = require('./config')
const { DBConnect } = require('./DBconnect')

const routes = require('./apis/index')

app.use(express.json())
app.use('/api',routes)

app.all('/*',(req,res) => {
    res.status(404).send('Not Found')
})

app.listen(config.port, () => {
    console.log(`Server On!!
port number is 2008`)
    DBConnect()
})