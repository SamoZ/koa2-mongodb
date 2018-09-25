const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const static = require('koa-static');
const session = require('koa-session');

const app = new Koa();

app.use(static(__dirname + '/static'));

// 第三方中间件
app.use(views('views', {
    extension: 'ejs'
}))

app.keys = ['some secret hurr']; // cookie 签名
 
const CONFIG = {
    key: 'koa:sess', // 默认
    maxAge: 86400000, // cookie 过期时间  需要设置
    autoCommit: true, // 默认
    overwrite: true, // 默认
    httpOnly: true, // true 只能服务器可以获取 cookie
    signed: true, // 默认
    rolling: false, // 在每次请求时都强行设置 cookie, 这将重置 cookie 过期时间
    renew: true, // 需要设置
};
 
app.use(session(CONFIG, app));

router
    .get('/', async (ctx) => {

        // 设置 session
        ctx.session.user = '李四';

        let list = {
            name: '张三'
        };

        await ctx.render('index', { list });
    })
    .get('/news', async (ctx) => {
        // 获取 session
        console.log(ctx.session.user);

        let app = {
            name: '张三'
        };

        await ctx.render('news', { app });
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);