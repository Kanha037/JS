const user={
  username:"kanha",
  email:"kanha@google.com",
  signedIn:true,
  loginCount:8,
  greeting:function () {
    console.log(`Username is ${this.username}`);
    console.log(this);
  }
};
// console.log(user["username"]);
// console.log(user.username);
// console.log(user.greeting());

// user.username="ritik"
// console.log(user.greeting());

function User(username,loginCount,signedIn) {
  this.username=username;
  this.loginCount=loginCount;
  this.signedIn=signedIn;
  this.greeting=function () {
    console.log(`Username is ${this.username}`);
  }
  return this;
}
const user1=new User("kanha",10,true);
const user2=new User("Ritik",8,false);
// console.log(user1);
// console.log(user2);
// console.log(user1.greeting());
/*
output:-
User {
  username: 'kanha',
  loginCount: 10,
  signedIn: true,
  greeting: [Function (anonymous)]
}
User {
  username: 'Ritik',
  loginCount: 8,
  signedIn: false,
  greeting: [Function (anonymous)]
}
Username is kanha
undefined
*/
console.log(user1.constructor);
console.log(user1 instanceof User);
console.log(user1 instanceof Object);
