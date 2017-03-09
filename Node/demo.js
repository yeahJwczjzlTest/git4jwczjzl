var fs = require("fs");
var rs = fs.createReadStream("1.txt","utf-8");
var ws = fs.createWriteStream("copy.txt","utf-8");
rs.pipe(ws);