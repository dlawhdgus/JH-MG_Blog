const express = require('express')
const app = express()
const config = require('./config')
const routes = require('./routes/apis')
const { dbconnect } = require('./DBconnect')
const passport = require('passport')
const passportConfig = require('./middlewares/passport')

passportConfig()

app.use(express.json())
app.use('/api',routes)

app.all('/*',(req,res) => {
    res.status(404).send('Not Found')
})

app.listen(config.port, () => {
    console.log(`Server On!!
port number is 2008`)
    dbconnect
})