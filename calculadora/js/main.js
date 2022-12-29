const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const btnSum = document.querySelector("#btn-plus");
const btnTimes = document.querySelector("#btn-times");
const btnClear = document.querySelector("#btn-clear");

let n1 = 0;
let n2 = 0;

number1.addEventListener('change', handlerNumber1Change);
number2.addEventListener('change', handlerNumber2Change);
btnSum.addEventListener('click', handleBtnSumClick);
btnTimes.addEventListener('click', handleBtnTimesClick);
btnClear.addEventListener('click', handleBtnClearClick);

function handlerNumber1Change(event){
    if(isNumber(event.target.value )){
    n1 = Number(event.target.value);
    event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function handlerNumber2Change(event){
    if(isNumber(event.target.value)){
    n2 = Number(event.target.value);
    event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function handleBtnSumClick(){
    const sum = n1 + n2;
    document.getElementById("result-box").innerHTML = sum;
}

function handleBtnTimesClick(){
    const times = n1 * n2;
    document.getElementById("result-box").innerHTML = times;
}

function handleBtnClearClick(){
    document.querySelector("#number1").value = '';
    document.querySelector("#number2").value = '';
    document.getElementById("result-box").innerHTML = 0;
}
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function onlynumber(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode( key );
        var regex = /^[0-9.]+$/;
        if( !regex.test(key) ) {
           theEvent.returnValue = false;
           if(theEvent.preventDefault) theEvent.preventDefault();
        }
     }