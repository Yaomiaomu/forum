// 创建http服务
var express = require('express');
var app = express();

var path = require('path')
var router = require('./router.js')

//配置模板引擎
app.engine('.html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));

//挂载路由
app.use(router);


//设置端口
app.listen(3000, () => {
  console.log('The application runs at 127.0.0.1:3000');
})