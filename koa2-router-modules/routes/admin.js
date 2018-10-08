const router = require('koa-router')();
const user = require('./admin/user');
const focus = require('./admin/focus');
const news = require('./admin/news');

// 配置 admin 的子路由

router.get('/', async (ctx) => {
    ctx.body = '后台管理首页';
})

router.use('/user', user);
router.use('/focus', focus);
router.use('/focus', news);

module.exports = router;