//promise
//fetch ("")
//.then((response) =>{
//   console.log("ok");
//})
//.catch((reject) => {
//console.log("error");
//})

//let lotteryPromise = new Promise(function(resolve, reject){
//setTimeout(function() {
//    if (Math.random() >= 0.5){
//        resolve('You win');
//    }else {
 //       reject('You lost');
//    }
//}, 5000);

 
//});

//lotteryPromise
//.then((response) => console.log(response))
//.catch((error) => console.log(error));

//promisifying
// ამ ლოგიკით, wait შექმნის promiseს, პირობას, რომელიც დაელოდება ერთ წამს და ერთი წამის შემდეგ დარეზოლდდება.

//let wait = function(seconds){
//    return new Promise(function(resolve){
//        setTimeout(resolve, seconds=1000);
//    })
//}


//wait(1)

//.then( () =>{
//    console.log( 'hello 1');
//    return wait(4);
//})
//.then( () =>{
//    console.log('hello 2');
//    return wait(3)
//})
//.then ( () => {
//    console.log('hello 3');
//})

//fetch with new promise

//function apiRequis(){
//    return new Promise(function(resolve,reject){
//        fetch ('https://reqres.in/api/users?page=2')
//        .then(Response => Response.json())
//        .then(response =>{
//            resolve(response);
 //       })
 //       .catch((error) =>{
 //           reject(error);
 //       });
 //   });
//}
//apiRequis()
//.then(getinfo =>{
 //   console.log(getinfo);
//})
//.catch((reject) =>{
//    console.log("error");
//})


//function getComments (commentId){
//    return new Promise(function(resolve,reject){
 //       setTimeout(function(){
//            if (commentId < 100){
//                resolve('resolved Comments')
   //         }else{
 //               reject('rejected Comments');
  //          }
 //       }, 1000);
 //   });
//}
//function getPost (postId){
 //   return new Promise(function(resolve,reject){
 //       setTimeout(function(){
 //           if (postId < 100){
 //               resolve('resolved Posts')
 //           }else{
 //               reject('rejected Posts');
 //           }
 //       }, 1000);
 //   });
//}

//getComments(50)
//.then((userInfo) =>{
//    return getPost(30);
//})
//.then((response) => console.log(response))
//.catch((error) => console.log(error));

// როცა ორი ფუნქცია პარალელურად გვინდა გავუშვათ და საბოლოო შედეგი მივიღოთ ერთ წამში

//Promise.all([getComments(50), getPost(30)]).then(function(responses){
//    //responses [0] -getComments
//    //responses [1] - getPost

//    console.log(responses);
//})
//.catch((Error) => console.log(Error));




//callback hell
//getComments (function(result){
//    getPost(function(result2){
//        getUserIdd(function(result3){

//        })
//    })
//})


//async await

function test1(){
    setTimeout( () =>{
        console.log('test1');
    }, 3000)
}

function test2(){
    setTimeout( () =>{
        console.log('test2');
    }, 2000)
}

async function testFunction(){
    await test1();
    await test2();
}

testFunction();
console.log('hello');



function getComments (commentId){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if (commentId < 100){
                resolve('resolved Comments')
            }else{
                reject('rejected Comments');
            }
        }, 1000);
    });
}

//async await

let users = async function () {
    let response = await fetch("https://reqres.in/api/users?page=2");
    if (response.status !== 200) {
      throw "error";
    }
    let data = await response.json();
    return data;
  };
  
  users()
    .then((data) => console.log("resolved Info", data))
    .catch((error) => console.log("rejectred", error));
  
