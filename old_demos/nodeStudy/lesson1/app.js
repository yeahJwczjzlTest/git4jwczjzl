var express = require('express');
var app = express();
app.get('/',function(res,req){
	res.send('hello nodejs');
});
app.listen(3000,function(){
	console.log('app is listening at 3000 port');
});
