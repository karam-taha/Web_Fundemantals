// function removeElement(element1){          //or removeElement=()=>{
//     var element=element1.parentElement;                               different way to select the parent as a whole
//         element.remove();
//     }

    function removeElement(){
        var element=document.querySelector(".message")                   // tested using querySelector
        element.remove();
    }

    function clickAlert(){
        alert("Loading weather report...")
    }

    function c2f(temp) {
        return Math.round(9 / 5 * temp + 32) + "°";
    }
    
    function f2c(temp) {
        return Math.round(5 / 9 * (temp - 32)) + "°";
        
    }
    // function changeDegree(element) {
    //     console.log(element.value);
    //     for(var i=1; i<9; i++) {
    //         var tempSpan = document.querySelector("#temp" + i);
    //         var tempVal = parseInt(tempSpan.innerText);
    //         if(element.value == "°C") {
    //             tempSpan.innerText = f2c(tempVal);
    //         } else {
    //             tempSpan.innerText = c2f(tempVal);
    //         }
    //     }
    // }
    

    function changeDegree(element) {
        var tempSpan = document.querySelectorAll(".temp");
        tempSpan.forEach((span)=>{
            var tempVal = parseInt(span.innerText);
            if(element.value == "°C") {
                span.innerText = f2c(tempVal);
            } else {
                span.innerText = c2f(tempVal);
            }
        })
        
    }

    // function changeDegree(){
    //     document.querySelectorAll
    // }