const Koa = require('koa');
const router = require('koa-router')();
const views = require('koa-views');
const static = require('koa-static');

const app = new Koa();

app.use(static(__dirname + '/static'));

// 第三方中间件
app.use(views('views', {
    extension: 'ejs'
}))

router
    .get('/', async (ctx) => {
        ctx.cookies.set('user', 'zhangsan', {
            maxAge: 60 * 1000 * 60
        });

        let list = {
            name: '张三'
        };

        await ctx.render('index', { list });
    })
    .get('/news', async (ctx) => {
        let user = ctx.cookies.get('user');
        console.log(user);
        let app = {
            name: '张三'
        };

        await ctx.render('news', { app });
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3000);