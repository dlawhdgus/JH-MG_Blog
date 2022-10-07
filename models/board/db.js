const condition = require('../../apis/board/controller')
const db = require('../../DBconnect')
const  { ObjectId } = require('../../DBconnect')

exports.CreateArticleQuery = (callback) => {
    db.collection.insertOne(condition.CreateFilter, (err, result) => {
        return callback(true)
    })
}

exports.ReadArticleIdQuery = (callback) => {
    db.collection.findOne({ _id: ObjectId(condition.Get_ObjectId) }, (err, result) => {
        return callback(result)
    })
}


exports.ReadArticleAllQuery = (callback) => {
    db.collection.find({}, { projection: {} }).toArray((err, result) => {
        return callback(result)
    })
}

exports.UpdateArticleQuery = (callback) => {
    db.collection.updateOne({ _id: ObjectId(condition.Patch_ObjectId) }, condition.PatchUpdateQuery, (err, result) => {
        if (result.matchedCount === 0) return callback(true)
        else return callback(false)
    })
}

exports.DeleteOneArticleQuery = (callback) => {
    return db.collection.deleteOne({ _id: ObjectId(condition.DeleteObjectId) }, (err, result) => {
        if (result.deletedCount === 0) return callback(true)
        else return callback(false)
    })
}