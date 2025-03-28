const express = require('express') // express 서버 바꿀일이 없다는 뜻
const app = express()  //app -> 서버 담은 곳
// ALT + CLICK
// 순서 상관없이 서버 셋팅: 포트 넘버(번호) 1234 셋팅
// HTTP BODY값 JSON 인지 TEXT 인지 RAW 인지 
dotenv.config()
app.listen(process.env.PORT)

// GET + "/"
app.get('/',function (req,res) {
  res.send('Hello World')
})

let nodejsBook = { 
  title : "node.js",
  price : 20000,
  description : "이 책 좋음"
  }
 // 텍스트 한개 밖에 안가는데 데이터를 객체 형태로 보내자
app.get('/products/1', function(req,res) {
  res.json(nodejsBook)
  //res.send(20000)
})



