const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

// 第三方中间件
app.use(views('views', {
    extension: 'ejs'
}))

app.use(bodyParser());

router
    .get('/', async (ctx) => {
        await ctx.render('index');
    })

// 接收 post 提交数据
router.post('/add', async (ctx) => {
    ctx.body = ctx.request.body;
})


app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);