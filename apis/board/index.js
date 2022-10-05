const router = require('express').Router()
const controller = require('./controller')

router.post('/', controller.CreateArticleCode)
    .get('/', controller.ReadArticleAllCode)
    .get('/:id', controller.ReadArticleIdCode)
    .patch('/:id', controller.UpdateArticleCode)

module.exports = router