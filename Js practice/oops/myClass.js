class User{
  constructor(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
  }
  encryptPassword(){
     return `${this.password}abc`;
  }
  changeUsername(){
    return `${this.username.toUpperCase()}`
  }
}

const user1=new User("kanha","kanha@gmail.com","kanha@123");
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//Behind the scene

function User1(username,email,password) {
  this.username=username;
  this.email=email;
  this.password=password;
}
User1.prototype.changeUser=function () {
  return `${this.username.toUpperCase()}`
}
User1.prototype.encryptPass=function () {
  return `${this.password}abc`
}
const user2=new User1("kanha","kanha@gmail.com","kanha@123")
console.log(user2);
console.log(user2.changeUser());
console.log(user2.encryptPass());