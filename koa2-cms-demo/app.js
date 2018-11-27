const Koa = require('koa');
const path = require('path');
const router = require('koa-router')();
const render = require('koa-art-template');
const static = require('koa-static');
const session = require('koa-session');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(bodyParser());

// 配置 session 中间件
app.keys = ['some secret hurr'];

const CONFIG = {
    key: 'koa:sess',
    maxAge: 864000,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: true, // 每次请求都重新设置 session
    renew: false,
}

app.use(session(CONFIG, app));

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