console.log("page loaded...");


function removeElement(element1){   //or removeElement=()=>{
    var element=element1.parentElement.parentElement;
    if(element1.getAttribute('alt')=='accept'){
        var connections=document.getElementById('myConnections');
        var n=connections.textContent;
        document.getElementById('myConnections').textContent= ++n;
        var requests=document.getElementById('requests');
        var n1=requests.textContent;
        document.getElementById('requests').textContent= --n1;
        element.remove();
    }
    else{
        var connections=document.getElementById('requests');
        var n=connections.textContent;
        document.getElementById('requests').textContent= --n;
        element.remove();
    }
    
    
    // console.log(element);
    // console.log(this.class);
}

function editName(){
    var element=document.getElementById('name');
    element.textContent='Ahmad Naser'
}



