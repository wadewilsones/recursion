/* Fibonacci
Input: an integer
Processing:
Output: array of numbers where each number is a result of fibanachi equation


*/

const { off } = require("process");


//Factorial with recursion

function factor(n){
    if(n == 1){
        return n 
    }
    else{
        return n * factor(n-1) 
    }
}

//Using Euclidean 's algorithm the greatest divisor
function divisor(a,b){
    if(b == 0){
        return a
    }
    else{
        return divisor(b, a%b)
    }
}

function range(x, y) {

    if(x == (y-1)){
        return [];
    } 
    else{
        return [x+1, ...range(x+1, y)];
    }
}

function sum(arr){
    if(arr.length == 1){
        return arr[0]
    }
    else{
        arr[1] = arr[0] + arr[1];
        arr.shift();
        // first index value + next value, remove first value,
        return sum(arr);
    }
}

function exponent(base,exp){
    if(exp == 1){
        return base
    }
    else{
        return base * (exponent(base, exp-1))
    }
}

function mergeSort(){
    
}



module.exports =  exponent;



