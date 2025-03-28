const obj1 = {}
const obj2 = { message : "안 빔"}
const num = 1
const str1 = "one"
const str2 = ""

//이 부분만 함수로 
console.log(isEmpty(obj1). length === 0) // length == 0
console.log(isEmpty(obj2). length === 0) // length == 1

//console.log(Object.keys(num). length === 0)
console.log(isEmpty(str1). length === 0)
console.log(isEmpty(str2). length === 0)
//문자열도 허용 문자열도 결국에 객체이기 때문에

function isEmpty(obj) {
    if (obj.constructor === Object) // 매우 중요!
    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}