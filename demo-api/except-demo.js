const express = require('express')
const app = express()
app.listen(1234)

const fruits = [ 
    {id : 1, name : 'apple' },
    {id : 2, name : 'orange' },
    {id : 3, name : 'strawberry' },
    {id : 4, name : 'blueberry' }
]

// 과일 전체 조회
app.get('/fruits' ,(req,res) => {
 res.json(fruits)

})


// 과일 개별 조회
app.get('/fruits/:id', (req,res) => {
   let id   = req.params.id
   //let fruit = fruits[id-1] //이해 필요 
   var findFruit = 
    fruits.find(f => f.id == id) 
    // fruits 배열 안에 있는 객체 중, id 값이 param.id랑 같은 객체

    if(findFruit )
        res.json(findFruit)
    else // 예외를 터트린다 == http status code 성공 x 실패!
        res.status(404).send(
            "전달주신 ID로 저장된 과일이 없습니다."
        ) // 니가 찾는 리소스 없음

   res.json(fruit)
   
   })