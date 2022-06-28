const sumAll = function(low, high) {
    let sum = 0;
    let temp;
    if(typeof(low) != typeof(high))
    {
        return "ERROR";
    }
    if(high < low)
    {
        temp = low;
        low = high;
        high = temp;
    }
    if(low < 0)
    {
        return "ERROR";
    }
    for (let i = low; i <= high; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
