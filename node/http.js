var http = require('http')
// var fs = require('js')

// console.log(http)
http.get('http://www.nipic.com/photo/jingguan/shanshui/index.html',function(res){
	var data = ''; //定义一个变量用于存放数据
	res.on('data',function(a){
		// console.log(a.toString());
		data+=a.toString();
	})
	// 绑定end事件
	res.on('end',function(){
		var reg = /data-src=[\'\"]?([^\'\"]*)[\'\"]?/i;
		var arr = []
		var result;
		while (result = reg.exec(data)) {
			arr.push(result[1])
		}
		console.log(arr)
	})

})
