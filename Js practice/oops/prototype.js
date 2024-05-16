let myName="Kanha  "
console.log(myName.trim().length);
// myName.trueLength();

let myHero=["IronMan","Hulk","SpiderMan","Thor"]
let heroPower={
    IronMan:"Suit",
    Hulk:"Body",
    SpiderMan:"WebShoot",
    Thor:"Hammer",
    getPowerSpiderMan:function () {
      console.log(`Power is ${this.SpiderMan}`);
    }
}
// create a function kanha in Object
Object.prototype.kanha=function () {
  console.log(`Kanha is present in all object`);
}
heroPower.kanha();
myHero.kanha();
//Create a kd function in Array but it is not accessed by Object
Array.prototype.kd=function () {
  console.log(`kd is peresent in all Array `);
}
// heroPower.kd();
myHero.kd();

//-----------------Inheritancce-------------------
//Use __proto__ keyword
const User={
  username:"kanha",
  email:"kanha@gmail.com"
}
const teacher={
  makeVideo:true
}
const teacherAssit={
  Avail:false
}
const TASupport={
  makeAssign:"js Assignment",
  fulltime:true,
  __proto__:teacherAssit
}
// User.__proto__=teacher;

//use setprototypeof
Object.setPrototypeOf(teacher,User)
console.log(teacher.username);

//truelength function in all string

String.prototype.trueLength=function () {
  console.log(`${this}`);
  console.log(`\'${this}\' string of True length is ${this.trim().length}`);
}
myName.trueLength();