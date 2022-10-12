const fibonacci = function(n) {
    if(n < 0){
        return 'OOPS';
    }
    if(n==1 || n==2){
        return 1;
    }
    let sum = 0;
    if(n > 2){
        sum = fibonacci(n - 1) + fibonacci(n - 2);
    }
    return sum;

};

// Do not edit below this line
module.exports = fibonacci;
