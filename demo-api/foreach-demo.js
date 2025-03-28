
/* 배열 */

const arr = [1,2,3,4,5]

// 콜백 함수 호출 되는 시기 => 객체나 배열에서 요소를 하나 꺼낸 다음 불리는 콜백함수
// 순서대로 전달 
arr.forEach(function(a,b,c) {
    //데이터, 인덱스, 객체 통째로
    console.log(`a : ${a}, b : ${b} c : ${c}`)
})

// Map과 foreach의 만남
let map = new Map()
map.set(7, "seven")
map.set(9, "nine")
map.set(8, "eight")

map.forEach(function(a,b,c) {
    console.log(`a : ${a}, b : ${b}, c : ${c}`)
})