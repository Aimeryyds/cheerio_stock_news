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

const host='http://browserify.org/';
const url='';
requestUrlFn(host).then((res)=>{
	console.log(res);

})