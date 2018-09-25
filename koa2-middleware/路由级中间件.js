const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router
    .get('/', async (ctx) => {
        ctx.body = '首页';
    })
    .get('/news', async (ctx) => {
        console.log('新闻');
        ctx.body = '新闻';
    })

app.use(async (ctx, next) => {
    console.log('这是一个中间件');

    next();
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);