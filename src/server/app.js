var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.listen(3006, () => {
    console.log('服务器启动成功，数据接口地址：', 'http://127.0.0.1:3006/')
});
server.on('request', (req, res) => {
    // // 开启 服务器跨域 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-PINGOTHER, Content-Type');

    // console.log(req.url);
    if (req.url == '/') {
        fs.readFile('./data.json', 'utf-8', (err, datas) => {
            // console.log(datas);
            res.setHeader('Content-type', 'text/plain')
            // res.setHeader('Content-type','application/json')
            res.end(datas);
            req.url
        })
    } else {
        fs.readFile('./' + req.url + '.json', 'utf-8', (err, datas) => {
            if (err) {
                res.setHeader('Content-type', 'text/plain;charset=utf-8')
                res.end('请求地址有误');
            } else {
                // console.log(datas);
                res.setHeader('Content-type', 'text/plain')
                // res.setHeader('Content-type','application/json')
                res.end(datas);
            }
        })
    }

})