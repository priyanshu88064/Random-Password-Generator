const text = document.getElementById("text");
const length = document.getElementById("length");
const low = document.getElementById("isLow");
const upp = document.getElementById("isUpp");
const symbol = document.getElementById("symbol");
const number = document.getElementById("number");
const generate = document.getElementById("generate");

function getLow(){
    return String.fromCharCode(Math.floor(97+Math.random()*26));
}
function getUpp(){
    return String.fromCharCode(Math.floor(65+Math.random()*26));
}
function getNum(){
    return Math.floor(Math.random()*100)%11;
}
function getSymbol(){
    const arr = "!@#$%^&*()-=+{}[]|\/?";
    return arr[Math.floor(Math.random()*100)%arr.length];
}
function check(){
    if(length.value>=5 && length.value<=20)return 0;
    alert("length must be between 5 to 20");
    return 1;
}
function check1(){
    if(low.checked || upp.checked || symbol.checked || number.checked)return 0;
    alert("Select at least one checkbox");
    return 1;
}

function setback(){
    generate.innerHTML = "GENERATE and COPY";
    generate.disabled=false;
}

function work(){
    if(check()) return;
    if(check1()) return;

    var arr=[];
    if(low.checked)arr.push(1);
    if(upp.checked)arr.push(2);
    if(number.checked)arr.push(3);
    if(symbol.checked)arr.push(4);

    var str = "";
    for(var i=0;i<length.value;i++){
        var ind = Math.floor(Math.random()*100)%arr.length;
        if(arr[ind]==1)str+=getLow();
        else if(arr[ind]==2)str+=getUpp();
        else if(arr[ind]==3)str+=getNum();
        else str+=getSymbol();
    }
    text.value=str;
    navigator.clipboard.writeText(str);
    generate.innerHTML=".....COPIED!.....";
    generate.disabled=true;
    const timeout = setTimeout(setback,2000);
}
generate.addEventListener("click",work);