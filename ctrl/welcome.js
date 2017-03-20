const Router = require('koa-router');
module.exports = (app) => {
  const router = new Router({
          prefix: '/welcome'
      });
  router.get('/', async (ctx, next) => {
        ctx.body = {status:'done'};
    });    
   app.use(router.routes())
        .use(router.allowedMethods());
}