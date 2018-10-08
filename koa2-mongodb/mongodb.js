const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'koa';

/*console.time('start');
// 连接数据库
MongoClient.connect(url, {useNewUrlParser:true},  function (err, client) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Conneted successfully to server');

    const db = client.db(dbName);

    // 增加数据
    db.collection('user').insertOne({
        'useranme': '张三', 
        'age': 23, 
        'sex': '男', 
        'status': '1'
    }, function (err, result) {
        if (!err) {
            console.log('增加成功');

            client.close();
            console.timeEnd('start');
        }
    })

})*/

console.time('start');
// 连接数据库
MongoClient.connect(url, {useNewUrlParser:true},  function (err, client) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Conneted successfully to server');

    const db = client.db(dbName);

    // 查询
    const result = db.collection('user').find();

    result.toArray((err, docs) => {
        console.timeEnd('start');
        console.log(docs);
    })

})