const Koa = require('koa');
const res = require('koa-static');

const app = new Koa();
app.use(res('htm', { gzip: true }));

require('./ctrl/welcome')(app);

app.listen(3000, () => {
   
})