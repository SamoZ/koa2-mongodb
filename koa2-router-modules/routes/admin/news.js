// 新闻的增删改查
const router = require('koa-router')();

router.get('/', async (ctx) => {
    ctx.body = '新闻'
})

router.get('/add', async (ctx) => {
    ctx.body = '新闻'
})

router.get('/edit', async (ctx) => {
    ctx.body = '新闻'
})

router.get('/delete', async (ctx) => {
    ctx.body = '新闻'
})

module.exports = router.routes();