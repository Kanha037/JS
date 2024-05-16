const promisOne=new Promise(function (resolve,reject) {
  setTimeout(() => {
    console.log("Async task is completed.");
    resolve()
  },1000);
})

promisOne.then(function () {
  console.log("promise conjumed");
})

//without create a variable
new Promise(function (resolve,reject) {
  setTimeout(() => {
    console.log("Async task 2 complete");
    resolve()
  }, 1000);
}).then(function(){
   console.log("Async task resolved");
})

const promiseTwo=new Promise(function(resolve,reject){
  setTimeout(() => {
    resolve({username:"kanha",email:"kanha@gmail.com"})
  }, 1000);
})
promiseTwo.then(function (user) {
console.log(user);
})
//using then catch chain
const promiseThree=new Promise((resolve,reject)=>{
  setTimeout(() => {
   let error=false
   if(!error){
    resolve({username:'kanha',password:'kanha@123'})
   }
   else{
    reject("ERROR,Something went Wrong !!")
   }
  }, 1000);
})
promiseThree.then(function (user) {
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
}).catch((err)=>{
  console.log(err);
}).finally(()=>console.log("promise is either resolve or reject"))

//Using async wait
const promiseFour=new Promise(function(resolve,reject) {
      setTimeout(() => {
        let error=true
        if(!error){
          resolve({user:"kanha",password:"123"})
        }else{
          reject("ERROR: js went wrong")
        }
      }, 1000);
})

async function consumePromiseFour() {
  try {
   const response=await promiseFour
   console.log(response);
  } catch (error) {
     console.log(error);
  }
}
consumePromiseFour()

// async function getallUser() {
// try {
//   const response=await fetch('https://api.github.com/users/Kanha037')
//   const data = await response.json();
//   console.log(data);
// } catch (error) {
//   console.log('E: ',error);
// }
// }
// getallUser()

fetch('https://api.github.com/users')
.then((response)=>{
     return response.json();
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error))