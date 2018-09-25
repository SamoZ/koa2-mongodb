const Koa = require('koa');
const router = require('koa-router')();

// 中间件
app.use(async (ctx, next) => {
    console.log(new Date());
    
    await next();
})

const app = new Koa();

router
    .get('/', async (ctx) => {
        ctx.body = '首页';
    })
    .get('/news', async (ctx) => {
        ctx.body = '新闻';
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);