const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const config = require('./config');

class Db {
    static getInstance() { // 单例
        if (!Db.instance) {
            Db.instance = new Db();
        }
        return Db.instance;
    }

    constructor() {
        this.dbclient = '';
        this.connect();
    }

    // 连接数据库
    connect() {
        return new Promise((resolve, reject) => {
            if (!this.dbclient) { // 解决数据库多次连接的问题
                MongoClient.connect(config.url, {useNewUrlParser:true}, (err, client) => {
                    if (err) {
                        reject(err);
                    } else {
                        const db = client.db(config.dbName);
                        this.dbclient = db;
                        resolve(this.dbclient);
                    }
                })
            } else {
                resolve(this.dbclient);
            }
        })
    }

    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                let result = db.collection(collectionName).find(json);
    
                result.toArray((err, docs) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(docs);
                })
            })
        })
    }

    update(collectionName, json1, json2) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).updateOne(collectionName, json1, {
                    $set: json2
                }, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            })
        })
    }

    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).insertOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            })
        })
    }

    remove(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).removeOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            })
        })
    }

    getObjectID(id) {
        return new ObjectID(id);
    }
}

module.exports = Db.getInstance();