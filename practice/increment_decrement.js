const increase = document.getElementById('increase') ; 
const decrease = document.getElementById('decrease') ; 
const reset = document.getElementById('reset') ; 
const count = document.getElementById('count') ; 
 let countNo = 0 ; 
increase.addEventListener('click' , function(){
    countNo++ ; 
    count.innerHTML = countNo ; 
}) ;
decrease.addEventListener('click' , function(){
    countNo-- ; 
    count.innerHTML = countNo ; 
}) ;
reset.addEventListener('click' , function(){
    countNo = 0  ; 
    count.innerHTML = countNo ; 
}) ;



