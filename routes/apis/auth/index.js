const router = require('express').Router()
const controller = require('./controller')
const passport = require('passport')

router
    .post('/sign-up', controller.SignUpCode)
    .post('/sign-in', passport.authenticate('local', { session: false }), controller.SignInCode)
    .get('/', controller.UserDataCode)

module.exports = router