//1. Print odds 1-20
for(var i=1; i<21; i++){
    if(i%2!==0){
        console.log(i);
    }
}

//2. Decreasing Multiples of 3
for(var i=100; i>0; i--){
    if(i%3==0){
        console.log(i);
    }
}

//3. Print the sequence
for(var i=4; i>-4; i--){
    console.log(i);
    i-=(0.5);
}

//4. Sigma
var sum=0;
for(var i=1; i<101; i++){
    sum+=i;
}
console.log(sum);

//5. Factorial
var product= 1;
for(var i=1; i<13; i++){
    product*=i;
}
console.log(product);


