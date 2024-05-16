// const mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

let createDate=new Date(2024,2,14)
console.log(createDate.toString())
console.log(createDate.toDateString())
let cdate=new Date(2010,10,1,5,4)
console.log(cdate.toLocaleString())
let myCreateDate=new Date()
console.log(myCreateDate)
let myTime=Date.now()

console.log(myTime)
console.log(myCreateDate.getTime())
console.log(myCreateDate.getDay())
console.log(myCreateDate.getMonth())

console.log(myCreateDate.toLocaleDateString('default',{
    weekday:'long'
}))
