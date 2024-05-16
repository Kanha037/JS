// show(4)
// function show(num) {
//   console.log(`The number is ${num}`)
// }

// const num=(n)=>(console.log(`The number is ${n}`))

// num(5)
function one() {
  console.log("one")
  two()
}

function two() {
  console.log("two")
  three()
}

function three() {
  console.log("three")
  // one()
}
one()
two()
three()

