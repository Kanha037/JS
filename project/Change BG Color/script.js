const randomColor=function(){
  const hex='0123456789ABCDEF'
  let color='#'
  for(let i=0;i<6;i++){
    let random=Math.floor(Math.random()*16)
    color+=hex[random]
  }
  return color;
};
// console.log(randomColor());
let interval
const startChange=function(){
   if(!interval){
    interval=setInterval(changeBg, 1000);

   }
  function changeBg(){
     document.body.style.backgroundColor=randomColor()

  }
}
const stopChange=function(){
  clearInterval(interval);
  interval=null;
}
document.querySelector('#start').addEventListener('click',startChange)
document.querySelector('#stop').addEventListener('click',stopChange)
