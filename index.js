const http = require('http');
// es6字符串模版
const homePage = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>index</title>
		<style type="text/css">
			body {
				background:#f00;
			}
		</style>
	</head>
	<body>
		hell world
	</body>
	</html>`;
// 项目的启动
http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.end(homePage)
}).listen(3000);
// listen,表示监听的端口

console.log('服务启动了')
