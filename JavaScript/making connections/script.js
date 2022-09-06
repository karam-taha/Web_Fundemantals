console.log("page loaded...");


function removeElement(element1){   //or removeElement=()=>{
    var element=element1.parentElement.parentElement;
    if(element1.getAttribute('alt')=='accept'){
        var connections=document.getElementById('myConnections'); //reaches myConnections
        var n=connections.innerText;  //reads the number in myConnections n=500 
        document.getElementById('myConnections').innerText= ++n;
        var requests=document.getElementById('requests'); //reaches requests
        var n1=requests.innerText; //reads the number in requests n1=2
        document.getElementById('requests').innerText= --n1;
        element.remove();
    }
    else{
        var connections=document.getElementById('requests');
        var n=connections.innerText;
        document.getElementById('requests').innerText= --n;
        element.remove();
    }
    
    
    // console.log(element);
    // console.log(this.class);
}

function editName(){
    var element=document.getElementById('name');
    element.innerText='Farah Naser'
}


