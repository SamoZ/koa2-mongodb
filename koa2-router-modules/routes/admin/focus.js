// 轮播图增删改查
const router = require('koa-router')();

router.get('/', async (ctx) => {
    ctx.body = '轮播图'
})

router.get('/add', async (ctx) => {
    ctx.body = '轮播图'
})

router.get('/edit', async (ctx) => {
    ctx.body = '轮播图'
})

router.get('/delete', async (ctx) => {
    ctx.body = '轮播图'
})

module.exports = router.routes();