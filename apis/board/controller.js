const BoardDB = require('../../models/board/db')

exports.CreateArticleCode = (req, res) => {
    try {
        const { title, subtitle, body } = req.body
        const filter = {}
        const date = new Date()
        if (!title || typeof title !== 'string') return res.status(400).send('제목을 다시 입력해주세요')
        else filter.title = title
        if (subtitle) filter.subtitle = subtitle
        if (!body || typeof body !== 'string') return res.status(400).send('본문을 입력해주세요')
        else {
            filter.body = body
            filter.createAt = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
        }
        exports.CreateFilter = filter
        BoardDB.CreateArticleQuery((result) => {if(result) res.send('success')})
    } catch (error) {
        res.status(500).send('Internal Server Error')
    }
}

exports.ReadArticleAllCode = (req, res) => {
    try {
        BoardDB.ReadArticleAllQuery((result) => res.send(result))
    } catch (error) {
        return res.status(500).send('Internal Server Error')
    }
}

exports.ReadArticleIdCode = (req, res) => {
    try {
        const { id } = req.params
        if (id.length !== 24) res.status(400).send('Bad Request')
        exports.Get_ObjectId = id
        BoardDB.ReadArticleIdQuery((result) => {
            if (!result) return res.status(404).send('Not Found')
            else return res.send(result)
        })
    } catch (error) {
        return res.status(500).send('Internal Server Error')
    }
}

exports.UpdateArticleCode = (req, res) => {
    try {
        const { id } = req.params
        const { title, subtitle, body } = req.body
        const updateQuery = { $set: {} }
        const date = new Date()
        if (id.length !== 24) res.status(400).send('Bad Request')
        if ((!title || typeof title !== 'string') && (!subtitle || typeof subtitle !== 'string') && (!body || typeof body !== 'string')) return res.status(400).send('Bad Request')
        if (title && typeof title === 'string') updateQuery.$set.title = title
        if (subtitle && typeof subtitle === 'string') updateQuery.$set.subtitle = subtitle
        if (body && typeof body === 'string') {
            updateQuery.$set.body = body
            updateQuery.$set.createAt = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
        }

        exports.Patch_ObjectId = id
        exports.PatchUpdateQuery = updateQuery
        BoardDB.UpdateArticleQuery((result) => {
            if(result) res.status(404).send('Not Found')
            else res.send('success')
        })
    } catch (error) {
        return res.status(500).send('Internal Server Error')
    }
}

exports.DeleteOneArticleCode = (req, res) => {
    try {
        const { id } = req.params
        if (id.length !== 24) res.status(400).send('Bad Request')
        exports.DeleteObjectId = id
        BoardDB.DeleteOneArticleQuery((result) => {
            if(result) res.status(404).send('Not Found')
            else res.send('success')
        })
    } catch (error) {
        return res.status(500).send('Internal Server Error')
    }
}
