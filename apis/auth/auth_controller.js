const AuthDB = require('../../models/auth/auth_db')

exports.SignUpCode = (req, res) => {
    const { email, nickname, password, introduce } = req.body

    if (email.match(/[\w\-\.]+\@[\w\-\.]+\.[\w\-\.]+/g) === null) return res.status(400).send('잘못된 형식의 이메일 입니다.')
    if (!nickname || typeof nickname !== 'string') return res.status(400).send('닉네임을 다시 입력해주세요.')
    if (!password || typeof password !== 'string') return res.status(400).send('비밀번호를 다시 입력해 주세요.')
    if (typeof introduce !== 'string') return res.status(400).send('한줄 소개가 잘못 되었습니다.')

    AuthDB.SignUpQuery((result => {
        if (result) res.status(404).send('Not Found')
        else res.send('success')
    }), { email, nickname, password, introduce }, (err => { if (err) res.status(400).send('이미 가입되어 있는 이메일 입니다.') }), (err => { if (err) res.status(400).send('이미 존재하는 닉네임 입니다.') }))
}

exports.UserDateCode = (req, res) => {
    AuthDB.UserDateQuery(result => {
        if (isEmptyArr(result)) res.status(404).send('사용자가 없습니다.')
        else res.send(result)
    })

    const isEmptyArr = (arr) => {
        if (Array.isArray(arr) && arr.length === 0) return true
        else return false
    }
}



