/**
 * Created by u._.u on 2016/12/9.
 */
function route(pathName,handler,response) {
    console.log("Function 'route' is run with : "+pathName);
    if (typeof handler[pathName] === "function"){
        handler[pathName](response);
    }else {
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 not found!");
        response.end();
        console.log("404 not found!");
    }

}

exports.route = route;