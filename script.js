const btnEle = document.querySelectorAll("button") ;
const inputEle = document.getElementById("result") ;


btnEle.forEach((btn)  => {
    btn.addEventListener("click" , () => {
        let btnVal = btn.textContent ;
        if(btnVal === "C") {
            clearResult() ;
        }
        else if(btnVal === "=") {
            calculate() ;
        }
        else{
            appendValue(btnVal) ;
        }
        }) ;
    }) ;
    
function clearResult() {
    inputEle.value = "" 
}

function calculate() {
    inputEle.value = eval(inputEle.value) 
}

function appendValue(btnVal) {
    inputEle.value += btnVal ;
}









