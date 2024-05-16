const mySym=Symbol("key1")
const obj={
    name:"Kanha",
    email:"KanhaDas@gmail.com",
    age:22,
    [mySym]:"Symbol key"
}
console.log(obj.name);
console.log(obj["name"]);

//Object keyword used for predefined function accessed..
console.log(Object.keys(obj))
console.log(Object.values(obj))

// Object.freeze(obj)
console.log(obj);

obj.greeting=function() {
    console.log("Hello , I am kanha");
}
obj.greeting1=function() {
    console.log(`Hello , I am ${this.name}`);
}

console.log(obj.greeting());
//Annonymous Function
console.log(obj.greeting);

console.log(obj.greeting1());