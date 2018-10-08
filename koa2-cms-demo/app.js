const Koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const render = require('koa-art-template');
const static = require('koa-static');

const app = new Koa();

// 配置模板引擎
render(app, {
    root: path.join(__dirname, 'views'),
    extname: '.html',
    debug: process.env.NODE_ENV !== 'production'
});

// 配置静态资源的中间件
app.use(static(__dirname + '/public'));

// 引入模块
const index = require('./routes/index');
const api = require('./routes/api');
const admin = require('./routes/admin');

router.use('/admin', admin);
router.use('/api', api);
router.use(index);


app.use(router.routes(), router.allowedMethods());

app.listen(3000);