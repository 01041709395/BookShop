const express = require('express') // express 서버 바꿀일이 없다는 뜻
const app = express()  //app -> 서버 담은 곳
// ALT + CLICK
// 순서 상관없이 서버 셋팅: 포트 넘버(번호) 1234 셋팅
// HTTP BODY값 JSON 인지 TEXT 인지 RAW 인지 
app.listen(1234)

// GET + "/"
app.get('/:id',function (req,res) {
    let {id} = req.params // 비구조화 사용
    console.log(id)
    id = parseInt(id) // "숫자" => 숫자
    
    if (db.get(id) == undefined) {
        res.json ({
            message : "없는 상품입니다."
        })  
    } else {
        product = db.get(id)
        //prouduct["id"] = id ?? 에러 발생
        product.id = id // 자바였으면 진짜 변수를 전달받고 보내야 함
        res.json(product)


        /*res.json ({ //json을 통해 우리가 보내주고 싶은 값 보내기
            id : id,
            productName : db.get(id) 
        }) */
    } 
})


let db = new Map(); // map을 데이터베이스 대신 사용

let notebook = {
    productName : "Notebook",
    price : 2000000
}

let cup = {
    productName : "Cup",
    price : 33000
}

let chair = {
    productName : "Chair",
    price : 100000
}

let poster = {
    productName : "Poster",
    price : 20000
}

//맵에 저장해보고 출력

db.set(1, notebook) // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, cup)
db.set(3, chair)
db.set(4, poster)

// 객처를 각각 만들어서 set 해주는 방법
// json 만들어서 객체 넣어주기


console.log(db) //화살표로 매핑 , map value
console.log(db.get(1))
console.log(db.get(2))
console.log(db.get(3))