
//writ documention for it, what it will do??
function addLike(id){
    var likesbtn = document.getElementById(id).textContent;
    document.getElementById(id).textContent= ++likesbtn;
}


//if we want to use multiple buttons we use id and go to the [onclick="addLike('likecount2')"] and type likecount2 inside it instead of empty


// function addLike(){
//     var likesbtn = document.getElementById("likecount").textContent;
//     document.getElementById("likecount").textContent= ++likesbtn;
// }

//    if we want to use one button only
