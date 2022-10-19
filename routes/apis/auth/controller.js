const AuthDB = require('../../../models/auth/auth_db')
const jwt = require('../../../modules/jwt')

exports.UserDataCode = (req, res) => {
    try {
        AuthDB.UserDataQuery(result => {
            if (isEmptyArr(result)) res.status(404).send('사용자가 없습니다.')
            else res.send(result)
        })

        const isEmptyArr = (arr) => {
            if (Array.isArray(arr) && arr.length === 0) return true
            else return false
        }
    } catch (e) { if (e) throw e }
}

exports.SignUpCode = (req, res) => {
    try {
        const { email, nickname, password, introduce } = req.body

        if (email.match(/[\w\-\.]+\@[\w\-\.]+\.[\w\-\.]+/g) === null) return res.status(400).send('잘못된 형식의 이메일 입니다.')
        if (!nickname || typeof nickname !== 'string') return res.status(400).send('닉네임을 다시 입력해주세요.')
        if (!password || typeof password !== 'string') return res.status(400).send('비밀번호를 다시 입력해 주세요.')

        AuthDB.SignUpQuery((result => {
            if (result) return res.status(404).send('Not Found')
            else return res.send('success')
        }), { email, nickname, password, introduce }, (err => { if (err) res.status(400).send('이미 가입되어 있는 이메일 입니다.') }), (err => { if (err) res.status(400).send('이미 존재하는 닉네임 입니다.') }))
    } catch (e) { if (e) throw e }
}

exports.SignInCode = (req, res) => {
    try {
        const { user } = req
        const token = jwt.token(user._id)
        res.send(token)
    } catch (e) { if (e) throw e }
}