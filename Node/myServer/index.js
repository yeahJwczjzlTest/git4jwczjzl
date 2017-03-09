/**
 * Created by u._.u on 2016/12/9.
 */
var server = require("./server");
var route = require("./route");
var requireHandler = require("./requestHandlers");
var handler = {};
handler["/"] = requireHandler.start;
handler["/start"] = requireHandler.start;
handler["/upload"] = requireHandler.upload;
server.start(route.route,handler);
