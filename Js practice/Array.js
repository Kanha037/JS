// const arr=[0,1,2,3,"kanha",10]
// console.log(arr[4])

// const myArr=[3,2,1,8,6]
// console.log(myArr);
// myArr.push(9)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(0)
// console.log(myArr);
// myArr.shift()
// console.log(myArr.sort());

// const myArr=new Array(1,2,3,4)
// const arr=myArr.slice(1,3)
// console.log(myArr);
// console.log(arr);
// console.log(myArr);

// const myarr=new Array(2,1,4,5,6)
// const arr=myarr.splice(1,3)
// console.log(myarr);
// console.log(arr);
// console.log(myarr);


// const arr=["Kanha","Para"]
// const arr1=["Ritik","Pinaki"]
// const newArr=arr.concat(arr1)
// console.log(newArr)

// arr.push(arr1)
// console.log(arr)
// console.log(arr[2][1])
// const newArr=[...arr,...arr1]
// console.log(newArr);

const narr=[1,2,[3,4],[6,5,[8,9,["kanha","ritik"]]]]
const arr2=narr.flat(Infinity)
// const arr3=narr.flat(1)
// console.log(arr2);
console.log(arr2)
// console.log(narr);
console.log(Array.isArray("kd"))
console.log(Array.from("Kanha"))
console.log(Array.from({name:"Kanha"}))
let s=100
let s1=200
let s2=300
console.log(Array.of(s,s1,s2))
