const passport = require('passport')
const Localstrategy = require('passport-local').Strategy
const { connection } = require('mongoose')
const AuthColl = connection.collection('blog-auth')