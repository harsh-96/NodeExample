const http=require('http');
const u=require('url');
const fs=require('fs');
const q=require('querystring');
const pol=require('./ProfitOrLoss');
function process(req,res)
{
	res.writeHead(200,{'contant-Type':'test/html'});
	var p=u.parse(req.url);


	switch(p.pathname)
	{
		case "/":
		fs.readFile("index.html",function(err,data){
			if(err)
			{
				res.write("error");
				res.end();
			}else{
				res.write(data);
				res.end();
			}
			
		});
		break;
		case '/user':
		
		var str="";
		req.on ('data', function(d)
		{
			str=str+d;
		});
		req.on('end', function()
		{
			var s=q.parse(str);
			
			var obj=pol.calculation(parseInt(s.nm),parseInt(s.nm1),parseInt(s.nm2));
			  
			res.write("Total "+obj.profitOrLoss+" : "+obj.total);
			res.end();
		});
		break;
	}
}

var server=http.createServer(process);
server.listen(2000);
console.log("http running on 2000");

