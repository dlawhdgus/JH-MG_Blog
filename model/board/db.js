const MongoClient = require('mongodb').MongoClient
const config = require('../../config')
const ObjectId = require('mongodb').ObjectId
const condition = require('../../apis/board/controller')


MongoClient.connect(config.MONGODB_CONNECT_STRING, function (err, db) {
    if (err) throw err
    const dbo = db.db("db")
    const db_article = dbo.collection("blog-article")

    exports.CreateArticleQuery = (req, res) => {
        return db_article.insertOne(condition.CreateFilter, (err, result) => {
            res.send('success')
        })
    }

    exports.ReadArticleIdQuery = (req, res) => {
        return db_article.findOne({ _id: ObjectId(condition.Get_ObjectId) }, (err, result) => {
            if (EmptyArray(result)) return res.status(404).send('Not Found')
            res.send(result)
        })

        function EmptyArray(arr) {
            if (Array.isArray(arr) && arr.length === 0) return true
            return false
        }
    }


    exports.ReadArticleAllQuery = (req, res) => {
        return db_article.find({}, { projection: {} }).toArray((err, result) => {
            res.send(result)
        })
    }

    exports.UpdateArticleQuery = (req, res) => {
        return db_article.updateOne({ _id: ObjectId(condition.Patch_ObjectId) }, condition.PatchUpdateQuery, (err, result) => {
            if (result.matchedCount === 0) res.status(404).send('Not Found')
            else res.send('success')
        })
    }

    exports.DeleteOneArticleQuery = (req, res) => {
        return db_article.deleteOne({ _id: ObjectId(condition.DeleteObjectId) }, (err, result) => {
            if (result.deletedCount === 0) res.status(404).send('Not Found')
            else res.send('success')
        })
    }

})