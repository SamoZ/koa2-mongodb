const router = require('koa-router')();

router.get('/newslist', async (ctx) => {
    ctx.body = {title: "新闻接口"};
})

router.get('/focuslist', async (ctx) => {
    ctx.body = {title: "轮播图接口"};
})

module.exports = router.routes();