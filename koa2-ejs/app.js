const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');

const app = new Koa();

// 第三方中间件
app.use(views('views', {
    extension: 'ejs'
}))

/**
 * ejs 配置公共数据
 */
app.use(async (ctx, next) => {
    ctx.state = {
        user: '张三'
    };

    await next();
})

router
    .get('/', async (ctx) => {
        let title = 'hello ejs';

        await ctx.render('index', { title });
    })
    .get('/news', async (ctx) => {
        ctx.body = '新闻';
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);