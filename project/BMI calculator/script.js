const form=document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const result=document.querySelector('#results')
if(height==''||height<0||isNaN(height)){
  result.innerHTML=`${height} is not valid.`
}
else if(weight==''||weight<0||isNaN(weight)){
  result.innerHTML=`${weight} is not valid.`
}
else{
  const bmi= (weight/((height*height)/1000)).toFixed(2)

  if(bmi<18.6){
    result.innerHTML=`<span>${bmi}<br>You are Under Weight</span>`
  }
  else if(bmi>=18.6&&bmi<=24.9){
    result.innerHTML=`<span>${bmi}<br>You are Normal Weight<span>`
  }
  else{
    result.innerHTML=`<span>${bmi}<br>You are Over Weight<span>`
  }
}
})