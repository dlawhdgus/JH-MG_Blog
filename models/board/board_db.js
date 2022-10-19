const { connection } = require('mongoose')
const ObjectId = require('mongoose').Types.ObjectId
const ArticleColl = connection.collection('blog-article')

exports.CreateArticleQuery = (callback, CreateArticleFilter) => {
    ArticleColl.insertOne(CreateArticleFilter)
        .then(callback(true))
}

exports.ReadArticleIdQuery = (callback, _id) => {
    const projection = { _id: 0, user_id: 0 }
    ArticleColl.findOne({ _id: ObjectId(_id) }, { projection: projection })
        .then(result => callback(result))
}


exports.ReadArticleAllQuery = (callback) => {
    const projection = { _id: 0, user_id: 0 }
    ArticleColl.find({}, { projection: projection }).toArray()
        .then(result => callback(result))
}

exports.UpdateArticleQuery = (callback, _id, UpdateArticleQuery, userdata) => {
    ArticleColl.updateOne({ _id: ObjectId(_id), user_id: ObjectId(userdata.user_id) }, UpdateArticleQuery)
        .then(result => {
            if (result.matchedCount === 0) callback(true)
            else callback(false)
        })
}

exports.DeleteOneArticleQuery = (callback, _id, userdata) => {
    ArticleColl.deleteOne({ _id: ObjectId(_id), user_id: ObjectId(userdata.user_id) })
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