/**
* Created by u._.u on 2016/12/9.
*/

var http = require("http");
var url = require("url");

function start(route,handler) {
    function onRequest(requset, response) {
        console.log("Function 'onRequest' is running!");
        var pathName = url.parse(requset.url).pathname;
        if (pathName !== "/favicon.ico"){
            console.log(pathName);
            route(pathName,handler,response);
        }

    }
    http.createServer(onRequest).listen(8099);
    console.log("Server is running!");
}

exports.start = start;
