//프론트와 백엔드 사이에 돌려주는 respon json 값
const express = require('express')
const app = express()
const port = 1234


app.use(express.json()) // 다른 모듈 사용할 때 사용
app.post('/test', function (req,res) {
    // body에 숨겨져서 들어온 데이터 화면에 뿌리기

    console.log(req.body.message)
    res.json(req.body)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})