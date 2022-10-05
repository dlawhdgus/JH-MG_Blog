const express = require('express')
const app = express()
const port = 2008
const routes = require('./apis/index')

app.use(express.json())
app.use(routes)

app.listen(port, () => console.log(`Server On!!`))