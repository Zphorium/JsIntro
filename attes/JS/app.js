var morningstart =new Date().setTime(6);
var evening_date = new Date().setTime(18)
var night_date = new Date().setTime(23)
var current_date =new Date().getHours();

console.log('morning start ', morningstart)
console.log('evening_date ', evening_date)
console.log('night_date ', night_date)
console.log('current_date ', current_date)


console.log('body value ' , document.getElementById('body_id'))

if (current_date > morningstart && current_date < evening_date) {
    alert('Good morning')
    document.getElementById('body_id').style.background='purple'
    

}
if (current_date > evening_date && current_date < night_date) {
    document.getElementById('body_id').style.background='red'
    alert('Good evening')
}
else {
    document.getElementById('body_id').style.background='blue'
    alert('Good night')
}
