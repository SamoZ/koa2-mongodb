const Koa = require('koa');
const router = require('koa-router')();

const app = new Koa();

router
    .get('/', async (ctx) => {
        ctx.body = '首页';
    })
    .get('/news', async (ctx) => {
        console.log('3. 新闻');
        ctx.body = '新闻';
    })

app.use(async (ctx, next) => {
    console.log('1. 这是一个中间件');

    await next();

    console.log('5. 这是一个中间件');
})

app.use(async (ctx, next) => {
    console.log('2. 这是一个中间件');

    await next();

    console.log('4. 这是一个中间件');
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);