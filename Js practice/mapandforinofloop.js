//No duplicate stored in map
const map=new Map()
map.set('IN','India')
map.set('US','United')
map.set('FR','France')
console.log(map)

for (const key of map) {
    console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'US', 'United' ]
[ 'FR', 'France' ]
*/


for (const [key,val] of map) {
  console.log(key,val);
}
/*
IN India
US United
FR France
*/

const myObj={
  game1:"ff",
  game2:"Bgmi"
}
for (const key of myObj) {
  console.log(key)
}
// TypeError: myObj is not iterable

// forin loop for object iteration
for (const key in myObj) {
  console.log(key,myObj[key]);
}
// game1 ff
// game2 Bgmi

//for in loop in Array
const myArr=['Ritik','Kanha','Babul','Para']
for (const key in myArr) {
  console.log(key,myArr[key]);
}
// 0 Ritik
// 1 Kanha
// 2 Babul
// 3 Para
// forin loop for map is not applicable
