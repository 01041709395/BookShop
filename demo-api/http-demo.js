let http = require('http'); //http 모듈

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.write('Hello Node.js');
    response.end();
}

http.createServer(onRequest).listen(3306); //이렇게 최종적으로 써야함
// http 모듈에 createServer 함수에서 할일을 다 한 다음에
// onRequest 콜백 함수를 실행시켜달라고 매개변수로 던졌어!
// 서버를 만든다음에 요청해야함