const { connection } = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId
const AuthColl = connection.collection('blog-auth')
const crypto = require('../../modules/crypto')

exports.UserDateQuery = (callback) => {
    AuthColl.find().toArray().then(result => callback(result))
}

exports.SignUpQuery = (callback, params = {}, EmailErrorMessage, NicknameErrorMessage) => {
    const { email, nickname, password, introduce } = params
    const CreateUserFilter = {}

    if (!email && typeof email !== 'string') callback(true)
    else CreateUserFilter.email = email
    if (!nickname && typeof nickname !== 'string') callback(true)
    else CreateUserFilter.nickname = nickname
    if (!password && typeof password !== 'string') callback(true)
    else CreateUserFilter.password = crypto.encoding(password)
    if (introduce) CreateUserFilter.introduce = introduce

    AuthColl.findOne({ email: email })
        .then(result => {
            if (result) EmailErrorMessage(true)
            else {
                AuthColl.findOne({ nickname: nickname })
                    .then(result => {
                        if (result) NicknameErrorMessage(true)
                        else AuthColl.insertOne(CreateUserFilter).then(callback(false))
                    })
            }
        })
}

exports.SignInQuery = () => {

}