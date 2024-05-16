// function db() {
//   console.log("DB connected...");
// }
// db()
//Named iief
(function db() {
  console.log("DB connected...");
})();
( ()=> {
  console.log("DB connected...");
})();

//no name iief
((a,b)=>(
  console.log(a+b)
))(1,2)