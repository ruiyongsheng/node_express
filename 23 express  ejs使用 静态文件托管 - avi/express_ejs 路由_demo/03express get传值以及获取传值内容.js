/**
 * Created by Administrator on 2017/8/5 0005.
 */
/*


1.cd 到项目里面


2.npm init --yes   /   npm init  创建package.json

3.安装express

 npm install express --save


 cnpm install express --save


4.引入express使用

var express=require('express');

var app=new express()


app.get('',function(req,res){

})

*
* */



var express=require('express'); /*引入*/

var app=new express();  /*实例化*/


app.get('/',function(req,res){

    res.send('你好express');
})


//动态路由  http://localhost:3000/newscontent/213

app.get('/newscontent/:aid',function(req,res){


    //req.params 获取动态路由的传值


    console.log(req.params);

    var aid=req.params.aid;



    res.send('newscontent模块--'+aid);
})



//获取get传值   http://localhost:3000/product?aid=123
app.get('/product',function(req,res){

//http://localhost:3000/product?aid=123&cid=222

//req.query获取get传值

    console.log(req.query);
    res.send('product'+req.query.aid+'---'+req.query.cid);

})
app.listen(3000,'127.0.0.1');









