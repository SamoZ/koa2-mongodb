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
        // koa 中无法设置中文 cookie
        // 解决方法 start
        let name = new Buffer('张三').toString('base64');
        // 解决方法 end
        ctx.cookies.set('user', name, {
            maxAge: 60 * 1000 * 60
        });

        let list = {
            name: '张三'
        };

        await ctx.render('index', { list });
    })
    .get('/news', async (ctx) => {
        let cookie = ctx.cookies.get('user');
        let user = new Buffer(cookie, 'base64').toString();
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