const router = require('koa-router')();

// 引入模块
const login = require('./admin/login');
const user = require('./admin/user');

// 配置中间件 获取 url 地址
router.use(async (ctx, next) => {
    // 模板引擎配置全局的变量
    ctx.state.__HOST__ = 'http://' + ctx.request.header.host;

    // 权限判断
    if (ctx.session.userinfo) {
        await next();
    } else {
        if (ctx.url === '/admin/login' || ctx.url === '/admin/login/doLogin') {
            await next();
        } else {
            ctx.redirect('/admin/login');
        }
    }

})

router.get('/', async (ctx) => {
    // ctx.body = '后台管理';
    await ctx.render('admin/index');
})

router.use('/login', login);
router.use('/user', user);

module.exports = router.routes();