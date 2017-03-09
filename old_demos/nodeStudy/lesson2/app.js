var express = require('express');
var utility = require('utility');

var app = express();

app.get('/',function(res,req){
	var q = req.query.q;
	var md5Value = utility.md5(q);
	
	res.send(md5Value);
});

app.listen(3000,function(){
	console.log('app is listening at 3000 port');

});
