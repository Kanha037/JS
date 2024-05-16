// const lang=["js","java","python"]
// lang.forEach( function (item) {
  //   console.log(item);
  // } )
  // js
  // java
  // python


// lang.forEach((ele) => {
// console.log(ele);
// });
// js
// java
// python


// function print(item) {
//   console.log(item);
// }
// lang.forEach(print)
// js
// java
// python

// lang.forEach((item,index,arr)=>{
//   console.log(item,index,arr);
// })
// js 0 [ 'js', 'java', 'python' ]
// java 1 [ 'js', 'java', 'python' ]
// python 2 [ 'js', 'java', 'python' ]

const myobj=[
  {
    lang:"Javascript",
    file:"js"
  },

  {
    lang:"python",
    file:"py"
  },
  {
    lang:"ruby",
    file:"rb"
  }

]

myobj.forEach((item)=>{
  console.log(item.lang,":",item.file);
})
// Javascript : js
// python : py
// ruby : rb