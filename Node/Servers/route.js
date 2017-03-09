/**
 * Created by u._.u on 2016/12/8.
 */
function route(pathName,handle,response) {
    console.log("route.js part : " + pathName);
    if (typeof handle[pathName] === "function"){
        return handle[pathName](response);
    }else {
        console.log("No request handler found for " + pathName);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 not found!");
        response.end();
    }
}

exports.route = route;