// function show() {
//   console.log(this)
// }
// show()
// const user={
//   name:"Kanha",
//   greeting:function () {
//     console.log(`${this.name} ,welcom my site.`)
//     console.log(this);
//   }
// }
// user.greeting()
// user.name="ritik"
// user.greeting()

const addtwo=function (a,b) {
  return a+b
}
console.log(addtwo(1,2));

const result=(a,b)=>(a+b)

console.log(result(1,2));

const chai=()=>{
  let user="kanha"
  // console.log(this.user); undefined
  console.log(user);
}
chai()

const arrowfun=(a=0,b=0,c=0)=>{
  console.log(a," ",b," ",c)
}
arrowfun(1,2,3)

const arr=(a,b,c)=>(
  console.log(a," ",b," ",c)

)
arr(1,2,3)
