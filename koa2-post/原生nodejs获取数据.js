const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');

const common = require('./model/common');

const app = new Koa();

// 第三方中间件
app.use(views('views', {
    extension: 'ejs'
}))

router
    .get('/', async (ctx) => {
        await ctx.render('index');
    })

// 接收 post 提交数据
router.post('/add', async (ctx) => {
    // 原生 node.js 获取数据
    let data = await common(ctx);

    console.log(data);

    ctx.body = data;
})

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);