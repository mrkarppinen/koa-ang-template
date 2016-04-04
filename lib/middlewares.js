

var send = require('koa-send');

module.exports.index = index;
module.exports.statics = statics;


function *index(){
  yield send(this, 'public/index.html');
}


function *statics(){
  yield send(this, this.originalUrl);
}
