const router = require('koa-router')();

router.get('/', async (ctx) => {
    ctx.body = '首页';
})

router.get('focus', async (ctx) => {
    ctx.body = '轮播';
})

module.exports = router.routes();