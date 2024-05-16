// const isuserloggedIn=true
// if (isuserloggedIn) {
//   console.log("User logged in Successfully...");
// }
// else{
//   console.log("No user logged in...");
// }
const month=""
switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "Mar":
    console.log("March");
    break;
  case "Apr":
    console.log("April");
    break;
  case "may":
    console.log("May");
    break;
  case "jun":
    console.log("June");
    break;
  case "jul":
    console.log("July");
    break;
  case "aug":
    console.log("Augest");
    break;
  case "sept":
    console.log("September");
    break;
  case "oct":
    console.log("October");
    break;
  case "nov":
    console.log("November");
    break;
  case "dec":
    console.log("December");
    break;

  default:
    console.log("Invalid month..");
    break;
}

// falsy values
// false,0,-0,0n,NaN,"",null,undefined
//true values
//"False","0"," ",[],function(){}

//Nullis colescing operator : ??
let x;
x=5??10
x=null??10
x=undefined??12
x=null??10??20
console.log(x);
