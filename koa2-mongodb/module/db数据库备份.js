const MongoClient = require('mongodb').MongoClient;
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
        // this.connect();
    }

    // 连接数据库
    connect() {
        let _that = this;
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

    update() {

    }

    insert() {

    }
}

let mydb = Db.getInstance();

setTimeout(() => {
    console.time('start');
    mydb.find('user', {}).then((data) => {
        // console.log(data);
        console.timeEnd('start');
    })
}, 100);

setTimeout(() => {
    console.time('start2');
    mydb.find('user', {}).then((data) => {
        // console.log(data);
        console.timeEnd('start2');
    })
}, 3000);

let mydb2 = Db.getInstance();

setTimeout(() => {
    console.time('start3');
    mydb2.find('user', {}).then((data) => {
        // console.log(data);
        console.timeEnd('start3');
    })
}, 5000);

setTimeout(() => {
    console.time('start4');
    mydb2.find('user', {}).then((data) => {
        // console.log(data);
        console.timeEnd('start4');
    })
}, 7000);
