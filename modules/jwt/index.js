const jwt = require('jsonwebtoken')
const config = require('../../config')
const date = new Date()


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
    if(!authorization) return false
    else {
        const token = authorization.split(' ')[1]
        const userdata = jwt.decode(token, config.JWT_PRIVATE_KEY)
        return userdata
    }
}

exports.expireAtCheck = (authorization) => {
    const token = authorization.split(' ')[1]
    const userdata = jwt.decode(token, config.JWT_PRIVATE_KEY)
    const ExpireTimeStamp = userdata.exp
    const expireAt = new Date(Number(ExpireTimeStamp+'000')).toLocaleString()
    const now = date.toLocaleString()

    if(expireAt > now) return(true)
    else return false
}

//iat => 발급시간
//exp => 만료시간