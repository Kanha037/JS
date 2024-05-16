class User{
  constructor(username){
    this.username=username;
  }
  logMe(){
    console.log(`Username is ${this.username}`);
  }
  static createId(){
    return `123`;
  }
}
class Teacher extends User{
  constructor(username,email,password){
    super(username);
    this.email=email;
    this.password=password;
  }
  showUsername(){
    console.log(`Teacher username is ${this.username}`);
  }
}

const teacher1=new Teacher("Kanha","kanha@gmail.com","kanha@123");
teacher1.showUsername();
teacher1.logMe();
console.log(teacher1.createId());
