let one=document.getElementById("one")
let two=document.getElementById("two")
let output=document.getElementById('output')

function doAdd(){
  output.innerHTML = Number(one.value) + Number(two.value);
}
