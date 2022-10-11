const router = require('express').Router()
const controller = require('./board_controller')

router
    .post('/', controller.CreateArticleCode)
    .get('/', controller.ReadArticleAllCode)
    .get('/:_id', controller.ReadArticleIdCode)
    .patch('/:_id', controller.UpdateArticleCode)
    .delete('/:_id', controller.DeleteOneArticleCode)
    .delete('/', controller.DeleteManyArticleCode)
module.exports = router