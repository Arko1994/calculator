var calcInput = document.getElementsByName('calc')[0];

var buttonArray = document.getElementsByClassName('number');

var eql = document.getElementById('equal');
var clr = document.getElementById('clear');
var i;

for(i = 0; i < buttonArray.length; i++) {
    buttonArray[i].onclick = function(e){
        calcInput.value += this.innerHTML;
    }
}

eql.onclick = function(e) {
    calcInput.value = eval(calcInput.value);
}
clr.onclick = function(e) {
    calcInput.value = '';
}

   /* calcInput. = function(e) {
 if(this.value === '+') {
        this.value = '';
        console.log(this.value);
    alert('jhjh');
}
    } */

console.log(calcInput.name);