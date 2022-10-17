const passport = require('passport')
const Localstrategy = require('passport-local').Strategy
const { connection } = require('mongoose')
const AuthColl = connection.collection('blog-auth')
const crypto = require('../../../modules/crypto')

module.exports = () => {
    passport.use(new Localstrategy(
        {
            usernameField : 'email',
            passwordField : 'password'
        },
        (email, password, done) => {
            AuthColl.findOne({ email : email})
                .then(user => {
                    if(user){
                        if(password === crypto.decoding(user.password)){
                            AuthColl.findOne({email : email, password : user.password})
                                .then(user => {
                                    if(user) return done(null, user)
                                    else return done(null, false, { message : 'Incorrect password'})
                                })
                                .catch(e => {if(e) throw e})
                        }
                        else return done(null, false)
                    }
                    else return done(null, false, { message : 'Bad Request'})
                })
                .catch(e => {if(e) throw e})
        }
    ))
}