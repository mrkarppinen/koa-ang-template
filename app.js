

var mount = require('koa-mount');
var koaBody = require('koa-body')();

var koa = require('koa');
var app = koa();

var middlewares = require('./lib/middlewares');


// static files
app.use(mount('/public', middlewares.statics));
app.use(mount('/node_modules', middlewares.statics));


app.use(mount('/', middlewares.index));


app.listen(3000);
