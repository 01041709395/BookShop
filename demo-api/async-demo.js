// async-await : promise 객체를 좀 더 쉽게 편하게 사용 문법
// 즉, 비동기 처리가 쉽다!

// async 함수
// ____ function function f() {} : 일반 함수
// async function f() {} : async 함수

async function f() {
    return Promise.resolve(7); // promise 객체를 반환 하는 중

    // async 두번째 기능
    // ~ 만약 반환값이 promise가 아니면, promise.resolve()
    // async 공간을 제공!
    // await 공간안에서 promise 기다려줌 
}

f().then(
    function(result) {
        console.log("promise resolve : ", result);    
    },
    function(error) {
        console.log("promise reject : ", error);
    }
);