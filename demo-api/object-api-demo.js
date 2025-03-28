const express = require('express') // express 서버 바꿀일이 없다는 뜻
const app = express()  //app -> 서버 담은 곳
// ALT + CLICK
// 순서 상관없이 서버 셋팅: 포트 넘버(번호) 1234 셋팅
// HTTP BODY값 JSON 인지 TEXT 인지 RAW 인지 
app.listen(1234)

//https://www.youtube.com/@JTBCdrama
//https://www.youtube.com/@dlaustjek
//https://www.youtube.com/@GGAB-official

let youtube1 = {
    channelTitle : "드라마",
    sub : "200만명",
    videoNum : "324개"
}

let youtube2 = {
    channelTitle : "이면서다",
    sub : "18.9명",
    videoNum : "132개"
}

let youtube3 = {
    channelTitle : "깨박이",
    sub : "70만명",
    videoNum : "500개"
}

app.get('/:nickname', function(req, res) {
    
    const {nickname} = req.params

    if (nickname == "@JTBCdrama") {
        res.json(youtube1)
    } else if (nickname == "@dlaustjek") {
        res.json(youtube2)
    } else if (nickname == "@GGAB-official") {
        res.json(youtube3)
    } else {
        res.json({
            message : "저희가 모르는 유튜버입니다."
        })
    }
    // 개발자가 예상하지 못한 에러 = 예외가 발생했다!
})