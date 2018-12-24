/**
 * Created by Administrator on 2017/7/6 0006.
 */

//fs?˜˜

var fs = require('fs');
//path?˜˜
var path = require('path');  /*nodejs˜?˜˜˜?˜˜*/
//url?˜˜
var url = require('url');

//˜˜?˜?˜˜˜˜??˜˜˜  ?˜˜
function getMime(extname, callback) {  /*˜˜?˜˜?˜˜˜?˜˜˜*/

    fs.readFile('./mime.json', function (err, data) {

        if (err) {
            console.log('mime.json˜?˜˜˜˜˜˜˜');
            return false;
        }
        //console.log(data.toString());

        var Mimes = JSON.parse(data.toString());

        var result = Mimes[extname] || 'text/html';

        callback(result)

    })


}

exports.statics = function (req, res, staticpath) {


    var pathname = url.parse(req.url).pathname;   /*˜˜?url˜˜?*/


    if (pathname == '/') {
        pathname = '/index.html'; /*?˜?˜˜?˜˜˜?*/
    }
    //˜˜?˜?˜˜å˜?˜˜
    var extname = path.extname(pathname);

    if (pathname != '/favicon.ico') {  /*˜˜˜˜˜˜˜˜favicon.ico*/
        //console.log(pathname);
        //˜?˜˜˜˜˜˜˜? static˜˜˜˜˜index.html

        fs.readFile(staticpath + '/' + pathname, function (err, data) {

            if (err) {  /*ô˜˜˜˜˜˜?˜*/

                console.log('404');

                fs.readFile(staticpath + '/404.html', function (error, data404) {
                    if (error) {
                        console.log(error);
                    }
                    res.writeHead(404, { "Content-Type": "text/html;charset='utf-8'" });
                    res.write(data404);
                    res.end(); /*˜˜˜˜˜˜?*/
                })

            } else { /*˜˜˜˜˜˜˜˜?˜*/

                getMime(extname, function (mime) {
                    res.writeHead(200, { "Content-Type": "" + mime + ";charset='utf-8'" });
                    res.write(data);
                    res.end(); /*˜˜˜˜˜˜?*/
                });

            }
        })

    }

}