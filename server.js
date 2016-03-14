var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT || 3500;

app.listen(port, function(){
  console.log("...");
});

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/whoami', function(req,res) {
	var whoami = {};
	whoami.ipaddress =  req.headers['x-forwarded-for'] || req.connection.remoteAddress.match(/\:(?=[^:]*$)(.*)/)[1];
	whoami.language = formatLanguage(req.headers["accept-language"]);
	whoami.software = req.headers["user-agent"].match(/\((.*?)\)/i)[1];
	res.json(whoami);
});

function formatLanguage(lan){
	var a = lan.split(',');
	return a[0];
}