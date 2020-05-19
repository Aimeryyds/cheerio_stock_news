// const http = require('http');
// http.get('http://browserify.org/',function(response){
// 	response.setEncoding('utf8');
// 	response.on('data', function(reg) {
// 			console.log(reg);
// 	});
// })

// https://m.bilibili.com/


// http.get('https://www.ygdy8.com/index.html',function(response){
// 	response.setEncoding('utf8');
// 	 res.header("Access-Control-Allow-Origin", "*");  // 允许所有路径跨域
//    response.header("Access-Control-Allow-Headers", "X-Requested-With");
//    response.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//    response.header("X-Powered-By", ' 3.2.1');
//    response.header("Content-Type", "application/json;charset=utf-8");
// 	// response.setHeader('Access-Control-Allow-Origin','*');
// 	response.on('data', function(reg) {
// 		console.log(reg);
// 	});
// })
	


const request=require('request');

const requestUrlFn=(url)=>{
	return new Promise((resolve,reject)={
		request(url,function(error,res,body){
			if(res.statusCode==200){
				console.log('body:',body);
				resolve(body)
			}else{
				console.log('error:',error);
				reject(error)
			}
		})
	})
}
