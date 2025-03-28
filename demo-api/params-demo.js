const express = require('express') // express 서버 바꿀일이 없다는 뜻
const app = express()  //app -> 서버 담은 곳
// ALT + CLICK
// 순서 상관없이 서버 셋팅: 포트 넘버(번호) 1234 셋팅
// HTTP BODY값 JSON 인지 TEXT 인지 RAW 인지 
app.listen(1234)

 // 텍스트 한개 밖에 안가는데 데이터를 객체 형태로 보내자
app.get('/products/:n', function(req,res) {
     
    let number = parseInt(req.params.n) - 10
    console.log(number) // 문자로 된 숫자를 숫자로 취급

    res.json ({
        num : number
    })
    // : => 나한테 url로 매개변수를 전달 
    // req.params 변수 이름을 몰라서 params 변수에 니가 담아준 모든 값을 담아올거야
    // products/ _ 빈칸에 오는 값을 n이라는 변수에 담아줘
    //console.log(req.params)
    //console.log(req.params.n) 
})

//https://www.youtube.com/watch?v=e4La8QOEfic
app.get('/watch', function(req, res) {
    const q = req.query //q에 v와 t 담기(json 형태)
                        // q = {v:__, t:__} 
    console.log(q.v) // console 확인 습관
    console.log(q.t)

    res.json({
        video : q.v, // v 
        timeline : q.t

        // js객체(json)의 비구조화
        const {v, t} = req.query
        console.log(v)
        console.log(t)

        res.json({
            video : v,
            timeline : t
        })
        
    })
})