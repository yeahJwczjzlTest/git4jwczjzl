/**
 * Created by u._.u on 2016/12/8.
 */
var server = require("./server");
var route = require("./route");
var requesthandlers = require("./requestHandlers");
var handle = {};
//这里需要解释一下 handle 是一个对象,{},它的属性必须是一个有效的变量名,如果包含特殊字符,必须用""括起来,
//访问这些"特殊符号"属性的时候,必须使用[]来访问和赋值.
handle["/"] = requesthandlers.start;
handle["/start"] = requesthandlers.start;
handle["/upload"] = requesthandlers.upload;
console.log(typeof handle);
server.start(route.route,handle);
