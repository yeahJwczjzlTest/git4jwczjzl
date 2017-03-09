/**
 * Created by u._.u on 2016/12/8.
 */
var server = require("./server");
var route = require("./route");
var requesthandlers = require("./requestHandlers");
var handle = {};
// handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;
console.log(typeof handle);
server.start(route.route,handle);
