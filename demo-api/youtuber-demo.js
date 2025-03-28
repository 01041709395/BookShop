// express 모듈 세팅
const express = require('express') // express 서버 바꿀일이 없다는 뜻
const app = express()  //app -> 서버 담은 곳
// ALT + CLICK
// 순서 상관없이 서버 셋팅: 포트 넘버(번호) 1234 셋팅
// HTTP BODY값 JSON 인지 TEXT 인지 RAW 인지 
app.listen(1234, () => console.log('서버 실행 중...'))

//데이터 세팅
let youtuber1 = {
    channelTitle : "드라마",
    sub : "200만명",
    videoNum : "324개"
}

let youtuber2 = {
    channelTitle : "이면서다",
    sub : "18.9명",
    videoNum : "132개"
}

let youtuber3 = {
    channelTitle : "깨박이",
    sub : "70만명",
    videoNum : "500개"
}

let db = new Map()
var id = 1
db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)

//REST API 설계
app.get('/youtubers', function (req, res) {
   
   
    var youtubers = {}
    db.forEach(function(value,key) { 
        // 배열 => 데이터,인덱스 , 객체
        // map => 데이터, 키 , 객체
        youtubers[key] = value
    });
    
    res.json(youtubers)
})

app.get('/youtubers/:id',function (req,res) {


let {id} = req.params
id = parseInt(id)

const youtuber = db.get(id)
if  (youtuber == undefined) {
    res.json({
        message : "유튜버 정보를 찾을 수 없습니다."
    })
} else {
    res.json(youtuber)
}

})

app.use(express.json())
app.post('/youtubers', (req, res) => {
    console.log(req.body)
// 등록 map(db)에 저장(put) 해야함
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).channelTitle}님, 유튜브 세계에 오신걸 환영합니다!`
    })
})

app.delete('/youtubers/:id', function(req,res) {
    let {id} = req.params
    id = parseInt(id)
  
    

    var youtuber = db.get(id)
    if (youtuber == undefined) {
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다` 
          })
    } else {

        
    const channelTitle = youtuber.channelTitle
    db.delete(id)
    
    res.json({
      message : `${channelTitle}님, 우리의 인연은 다음에` 
    })

    }

})

app.delete('/youtubers', function(req,res) {
 
    var msg = ""
    if(db.size >= 1) {
    db.clear()
        msg = "전체 유튜버가 삭제되었습니다"
    
   } else {
        msg = " 삭제할 유튜버가 없습니다"
     }
   //db에 값이 1개 이상이면, 전체 삭제
   //값이 없으면, 삭제할 유튜버가 없습니다.
       res.json({
        message : msg
    })
})  

app.put('/youtubers/:id', function(req,res) {
    let {id} = req.params
    id = parseInt(id)
  
    

    var youtuber = db.get(id)
    var oldTilte = youtuber.channelTitle
    if (youtuber == undefined) {
        res.json({
            message : `요청하신 ${id}번은 없는 유튜버입니다` 
          })
    } else {
        var newTitle = req.body.channelTitle

        youtuber.channelTitle = newTitle
        db.set(id, youtuber)

        res.json ({
            message : `${oldTilte}님, 채널명 ${newTitle}로 수정되었습니다.`     
    })
    }
})