const display = document.getElementById("display")  //holds the display id which has the 0 in it
let num1 = "";  //we make num1 = a string > first number
let num2 = "";  //we make num2 = a string > second number
let op = "";  //we make op = a string > operation


function press(num){  //we make a press function that has a parameter called num
num1+=num;  //num1 = num1+ num > num1 is empty and num is the number inside the html
display.innerText=num1;  //displays the inner text inside num1 which is now empty + the number inside html
}

function setOP(key){  //we make a setOP function that has the parameter called key
    op=key;  //op = key > which is the operations that are inside html (+,-,*,/)
    num2=num1;  //num2 is now num1 after pressing the operation key
    num1="";  //num1 becomes empty again to type the second numbers inside the new num1
}

function clr(){  //we make a clr function with empty parameter
    num1="";  //after clr is clicked num1 becomes empty
    num2="";  //after clr is clicked num2 becomes empty
    op="";  //after clr is clicked op becomes empty
    display.innerText="0";  //displays the innerText to 0
}

function calculate(){  //we make a calculate function with empty parameter
    let a= parseFloat(num2);  //we make a variable called a which turns num2 into a float number
    let b= parseFloat(num1);  //we make a variable called b which turns num1 into a float number
    let result=0;  //we make a variable called result that equals 0
    switch(op){  //we make a switch which has the op string from before
        case "+":  //incase the op key was clicked equals + then
            result=a+b;  //result will be a + b
            break;  //and then it breaks
        case "-":  //if not the above case then incase the key was clicked equals - then
            result=a-b;  //result will be a - b
            break;  //and then it breaks
        case "*":
            result=a*b;
            break;
        case "/":
        result=a/b;
        break;
    }
    num1=result;  //after it finds the number after operation it turns it into num1
    op="";  //operation becomes empty
    display.innerText=result;  //displays the result
}