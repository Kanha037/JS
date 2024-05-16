function multiplyBy5(num){
  return num*5;
}
multiplyBy5.power=2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
// 25
// 2
// {}

function createUser(username,score) {
    this.username=username;
    this.score=score;
}
createUser.prototype.increamentByOne=function() {
  this.score++;
}
createUser.prototype.PrintMe=function() {
   console.log(`Username is ${this.username} and Score is ${this.score}`);
}
const user1= new createUser("Kanha",37);
const user2=new createUser("Ritik",13);
// console.log(user1.increamentByOne());
// console.log(user2.increamentByOne());
// user1.increamentByOne();
// user1.PrintMe();
