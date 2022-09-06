//1. Always hungry

function alwaysHungry(arr) {
    var counter = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            counter++;
        }
    }
    if(counter==0){
        console.log("I'm hungry");
    }
}

// function alwaysHungry(arr) {
//     let flag=false;
//     let i=0;
//     while(i<arr.length){
//         if(arr[i]=="food"){
//             console.log("yummy");                     more optimal
//             flag=true;
//         }
//         i++
//     }
//     if(!flag){
//         console.log("I'm hungry");
//     }
// }

alwaysHungry([3.14, "food", "pie", true, "food"]);

alwaysHungry([4, 1, 5, 7, 2]);


//2. High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = []; x=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr[x] = arr[i]; //test to know why filteredArr[i] doesnt work
            x++
        }
        
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


//3. Better than average

function betterThanAverage(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    avg=sum/arr.length;
    
    var count = 0
    for(var i=0; i<arr.length; i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


//4. Array Reverse

function reverse(arr) {
    var arrNew=[];
    for(var i=arr.length-1; i>=0; i--){
        arrNew.push(arr[i]);
    }
    return arrNew;
}

// function reverse(arr) {
//     for(let i=0, j=arr.length-1; i<arr.length/2; i++,j--){               optimal solution
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//     return arr;
// }

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



//5. Fibonacci Array

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(var i=2; i<n; i++){
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
