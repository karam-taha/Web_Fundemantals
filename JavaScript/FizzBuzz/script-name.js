var x="Fizz"
var y="Buzz"

for(var i=1; i<101; i++){
    if(i%3==0){
        console.log(x);
    }

    if(i%5==0){
        console.log(y);
    }

    if(i%3==0 && i%5==0){
        console.log(x+y);
    }

    if(i%3!==0 && i%5!==0)
        console.log(i);
}