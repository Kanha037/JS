const num=[1,2,3]
let res=num.reduce((acc,cur)=>{
  console.log(`acc:${acc} and cur:${cur}`);
  return acc+cur
},0)
console.log(res);
// acc:0 and cur:1
// acc:1 and cur:2
// acc:3 and cur:3
// 6
 res=num.reduce((acc,cur)=>{
  console.log(`acc:${acc} and cur:${cur}`);
  return acc+cur
},3)
console.log(res);
// acc:3 and cur:1
// acc:4 and cur:2
// acc:6 and cur:3
// 9

const shoppingCart=[
  {
    itemname:"js Course",
    price:2999
  },
  {
    itemname:"java Course",
    price:3999
  },
  {
    itemname:"mob dev Course",
    price:4999
  },
  {
    itemname:"Data scientist",
    price:10999
  }
]
const totalPrice=shoppingCart.reduce((acc,item)=>{
   return acc+item.price
},0)
console.log(totalPrice);
// 22996