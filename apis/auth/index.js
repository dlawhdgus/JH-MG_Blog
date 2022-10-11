const router = require('express').Router()
const controller = require('./auth_controller')

router
    .post('/', controller.SignUpCode)
    .get('/', controller.UserDateCode)

module.exports = router