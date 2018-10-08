// 用户的增删改查
const router = require('koa-router')();

router.get('/', async (ctx) => {
    ctx.body = '用户'
})

router.get('/add', async (ctx) => {
    ctx.body = '用户'
})

router.get('/edit', async (ctx) => {
    ctx.body = '用户'
})

router.get('/delete', async (ctx) => {
    ctx.body = '用户'
})

module.exports = router.routes();