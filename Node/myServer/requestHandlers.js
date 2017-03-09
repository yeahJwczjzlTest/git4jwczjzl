/**
 * Created by u._.u on 2016/12/9.
 */

var exec = require("child_process").exec;
function start(response) {
    console.log("function 'requestHandlers' -> 'start' is running!");
    exec("find /",function (error, stdout, stderr) {
       response.writeHead(200,{"Content-Type":"text/html"});
       response.write(stdout);
       response.end();
    });
}



// var fs = require("fs");
// function start(response) {
//     console.log("function 'requestHandlers' -> 'start' is running!");
//     fs.readFile("../domaster/index.html","utf-8",function (err, data) {
//         if (err){
//             console.log("Error : " + err);
//         }else {
//             response.writeHead(200,{"Content-Type":"text/html"});
//             response.write(data);
//             response.end();
//         }
//     })
// }


function upload(response) {
    console.log("function 'requestHandlers' -> 'upload' is running!");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Upload!!");
    response.end();
}

exports.start = start;
exports.upload = upload;