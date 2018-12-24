
exports.getMime = function (fs,extname) {
    var data = fs.readFileSync('./mime.json');
    var Mimes = JSON.parse(data.toString())
    return Mimes[extname] || 'text/html';
}