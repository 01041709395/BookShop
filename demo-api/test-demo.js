const express = require('express')
const app = express()
app.listen(1234)

// GET + "/" URL 조합 = 한 개
app.get('/', function (req, res) { // '/' -? default 도메인을 담고 있음
    res.send('Hello World')
  })
  
  //API 테스트 API : GET "http://localhost:1234/test"
  // TEST SUCCESS
  app.get('/test', function (req,res) {
    res.send("TEST SUCCESS")
  })
  
  //API 테스트 API : GET "http://localhost:1234/test/1"
  // "One!!"
  app.get('/test/1',function(req,res) {
    res.send("One!!")
  })