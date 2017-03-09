/**
 * Created by u._.u on 2016/12/7.
 */

//首先由系统自带的 http 模块创建实例 http
var http = require("http");
//由 url 模块创建 url 实例
var url = require("url");
//
function start(route,handle) {
    function onRequest(request,response) {
        var pathName = url.parse(request.url).pathname;
        if (pathName !== "/favicon.ico") {
            console.log("server.js part : "+pathName);
            route(pathName,handle,response);

        }

    }
    http.createServer(onRequest).listen(8889);
    console.log("服务器正在运行...");
}
exports.start = start;
