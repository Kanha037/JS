const i=[1,2,3,4,5,6]
let res=i.map((item)=>(item))
console.log(res);
// [ 1, 2, 3, 4, 5, 6 ]

 res=i.map((item)=>{
  return item
 })
console.log(res);
// [ 1, 2, 3, 4, 5, 6 ]
res=i
     .map((item)=>item*10)
     .map((item)=>item+1)

console.log(res);
// [ 11, 21, 31, 41, 51, 61 ]
res=i
     .map((item)=>item*10)
     .map((item)=>item+1)
     .filter((item)=>item>30)
console.log(res);
// [ 31, 41, 51, 61 ]