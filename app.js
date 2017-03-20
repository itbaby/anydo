const Koa = require('koa');
const res = require('koa-static');
const body = require('koa-better-body');

const app = new Koa();

app.use(body());
app.use(res('htm', { gzip: true }));




require('./ctrl/welcome')(app);

app.listen(3000)