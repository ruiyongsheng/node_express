// 引入http模块
var http = require('http');
// 引入fs模块
var fs = require('fs');
// 引入path模块
var path = require('path');
// 引入url模块
var url = require('url');
// 引入自定义的解析模块;
var mime = require('./model/getMimeFile.js');
http.createServer(function (req,res) {
    var pathName = url.parse(req.url).pathname;
    res.writeHead(200, {"Content-Type": " " + mime.getMime(fs, path.extname(pathName))+ "; charset=utf-8"});
    
    if(pathName == '/') pathName = '/index/html';
    if(pathName !== '/favicon.ico') {
        // 文件操作去读取static下面的index.html
        fs.readFile('static/'+pathName,function (err,data) {
            if(err){
                fs.readFile('static/404.html',function (err,data404) {
                    res.write(data404);
                    res.end();
                })
            } else {
                // console.log(data);
                res.write(data);
                res.end();
            }
        })
    }
    
}).listen('8002');