const get=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(Math.PI);
Math.PI=4;
console.log(Math.PI);
console.log(get);

// const myObj=Object.create(null)
// console.log(myObj);

const user={
   name:"kanha",
   id:"37"
}
let myprop=Object.getOwnPropertyDescriptor(user,"name")
console.log(myprop);

Object.defineProperty(user,'name',{
  writable:false,
  enumerable:false
  // configurable:false
})
console.log(Object.getOwnPropertyDescriptor(user,"name"))

for(let [key,value] of Object.entries(user)){
  console.log(key,":",value);
}
