const MongoClient = require('mongodb').MongoClient
const config = require('./config')
const ObjectId = require('mongodb').ObjectId

exports.DBConnect = () => {
    MongoClient.connect(config.MONGODB_CONNECT_STRING, function (err, db) {
        if (err) throw err
        else {
            const dbo = db.db("db")
            const db_article = dbo.collection("blog-article")
            exports.collection = db_article
            console.log('DB connecting success')
        }
    })
}

exports.ObjectId = ObjectId