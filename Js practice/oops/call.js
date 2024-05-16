function SetUserName(username){
  this.username=username
}
function CreateUser(username,email,password) {
  SetUserName.call(this,username)
  this.email=email
  this.password=password
}
const user1=new CreateUser("kanha","kanha@gmail.com",123);
console.log(user1);
//CreateUser { email: 'kanha@gmail.com', password: 123 } change in CreateUser call function added explicitly
