const jwt = require('jsonwebtoken')
const config = require('../../config')

exports.token = (ObjID) => {
    return jwt.sign(
        {
            type : 'JWT',
            user_id : ObjID.toString()
        },
        config.JWT_PRIVATE_KEY,
        {
            expiresIn : '1h',
            issuer : 'Lim'
        }
    )
}

exports.verify_token = (authorization) => {
    const token = authorization.split(' ')[1]
    const userdata = jwt.decode(token, config.JWT_PRIVATE_KEY)
    return userdata
}

//iat => 발급시간
//exp => 만료시간