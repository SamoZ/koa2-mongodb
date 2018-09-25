function getPostData(ctx) {
    // 获取数据  异步
    return new Promise((resolve, reject) => {
        try {
            let str = '';
            ctx.req.on('data', (chunk) => {
                str += chunk;
            })
            ctx.req.on('end', (err, chunk) => {
                resolve(str);
            })
        } catch (error) {
            reject(error);
        }
        
    })
}

module.exports = getPostData;