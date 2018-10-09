const router = require('koa-router')();
const tools = require('../../model/tools');
const DB = require('../../model/db');


router.get('/', async (ctx) => {
    // ctx.body = '登录';
    await ctx.render('admin/login');
})

router.post('/doLogin', async (ctx) => {
    console.log(ctx.request.body);
    // 去数据库匹配
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;

    // 验证用户名密码是否合法

    // 去数据库匹配
    let result = await DB.find('admin', {
        username: username,
        password: password
    });

    // 成功把用户信息写入 session
    if (result.length > 0) {
        ctx.session.userinfo = result[0];

        ctx.redirect(ctx.state.__HOST__ + '/admin');
    } else {
        console.log('登陆失败');
    }

})

module.exports = router.routes();