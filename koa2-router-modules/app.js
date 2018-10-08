const Koa = require('koa');
const router = require('koa-router')();
const admin = require('./routes/admin');
const api = require('./routes/api');
const index = require('./routes/index');

const app = new Koa();

// 配置路由
router.use('/', index);

// 配置子路由
router.use('/admin', admin.routes(), admin.allowedMethods());

// api 子路由
router.use('/api', api);

app.use(router.routes(), router.allowedMethods());

app.listen(8000);