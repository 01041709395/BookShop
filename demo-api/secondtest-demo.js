const express = require('express') // express 서버 바꿀일이 없다는 뜻
const app = express()  //app -> 서버 담은 곳
// ALT + CLICK
// 순서 상관없이 서버 셋팅: 포트 넘버(번호) 1234 셋팅
// HTTP BODY값 JSON 인지 TEXT 인지 RAW 인지 
app.listen(1234)

// GET /hello, /bye, /nicetomeetyou
app.get('/hello',function(req,res) {
  res.json({
    say : '안녕하세요'}) // say값을 가지고 안녕하세요를 찾는다
})
app.get('/bye',function(req,res) {
  res.json({
   say : '잘가'})
})
// GET 메서드로, 'NICETOMEETYOU' 이 날아오면
// 매개변수로 전달받은 콜백 함수를 호출 하겠어 => 서버에 셋팅
app.get('/nicetomeetyou',function(req,res) {
  res.json({
    say : '만나서 반가워'
  })
  //문자열 -> 텍스트만 호출

})