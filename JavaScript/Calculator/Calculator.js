const display = document.getElementById("display")  
let num1 = "";  
let num2 = "";  
let op = "";  


function press(num){  
num1+=num;  
display.innerText=num1;  
}

function setOP(key){ 
    op=key;  
    num2=num1; 
    num1=""; 
}

function clr(){  
    num1=""; 
    num2=""; 
    op="";  
    display.innerText="0";
}

function calculate(){ 
    let a= parseFloat(num2); 
    let b= parseFloat(num1); 
    let result=0; 
    switch(op){ 
        case "+":  
            result=a+b; 
            break;  
        case "-":  
            result=a-b; 
            break; 
        case "*":
            result=a*b;
            break;
        case "/":
        result=a/b;
        break;
    }
    num1=result;  
    op="";  
    display.innerText=result; 
}