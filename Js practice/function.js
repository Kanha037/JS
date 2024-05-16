// console.log("Kanha");
//Function syntax
// function name(params) {

// }
function showMyname() {
  console.log("Kanha");
}
showMyname()
function addtwoNum(a,b){
  console.log(a+b)
}
addtwoNum(2,3)
addtwoNum(2,"3")
addtwoNum(2,"a")
addtwoNum(2,"")
addtwoNum(2,null)

const result=addtwoNum(2,5)
console.log(result); // undefined no retun any value  'addtwoNum(2,5)'

// return type function declaration
function add(p,q){
  console.log("Kanha Das");
  return p+q
}
const res=add(2,5)
console.log(res);

function loginUser(username="user") {
  if (username==undefined) {
    console.log(`please enter valid user name `);
  }
 return `${username} is logged in..`
}
console.log (loginUser())

// function addItem(num) {
//   return num
// }
function addItem(...num) {
  return num
}
console.log(addItem(200,300,400))

const user={
  name:"kanha",
  id:101
}
// const user1={
//   name:"kanha",
//   age:101
// }
function handleObject(anyobject) {
  console.log(`Username is ${anyobject.name} and Id is ${anyobject.id}`);
}
handleObject(user)
// handleObject(user1)
handleObject({name:"hari",id:101})

const arr=[100,200,300]
function showSecond(array) {
  return array[1]
}
console.log(showSecond([100,20,350]))
console.log(Array.length)
