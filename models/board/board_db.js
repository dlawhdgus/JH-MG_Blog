const { connection } = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId
const ArticleColl = connection.collection('blog-article')

exports.CreateArticleQuery = (callback, CreateArticleFilter) => {
    ArticleColl.insertOne(CreateArticleFilter)
        .then(callback(true))
}

exports.ReadArticleIdQuery = (callback, _id) => {
    ArticleColl.findOne({ _id: ObjectId(_id) })
        .then(result => callback(result))
}


exports.ReadArticleAllQuery = (callback) => {
    ArticleColl.find().toArray()
        .then(result => callback(result))
}

exports.UpdateArticleQuery = (callback, _id, UpdateArticleQuery) => {
    ArticleColl.updateOne({ _id: ObjectId(_id) }, UpdateArticleQuery)
        .then(result => {
            if (result.matchedCount === 0) callback(true)
            else callback(false)
        })
}

exports.DeleteOneArticleQuery = (callback, _id) => {
    ArticleColl.deleteOne({ _id: ObjectId(_id) })
        .then(result => {
            if (result.deletedCount === 0) callback(true)
            else callback(false)
        })
}

exports.DeleteManyArticleQuery = (callback, DeleteArticleFilter) => {
    ArticleColl.deleteMany(DeleteArticleFilter)
        .then(result => {
            if (result.deletedCount === 0) callback(true)
            else callback(false)
        })
}