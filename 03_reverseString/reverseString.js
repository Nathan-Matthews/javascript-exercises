const reverseString = function(string) {
    let finalString = '';
    let splitString = string.split("");
    for(let i = 0; i < string.length; i++)
    {
        finalString += splitString[string.length - 1 - i];
    }
    return finalString;
    
};

// Do not edit below this line
module.exports = reverseString;
