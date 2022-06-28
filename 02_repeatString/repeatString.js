const repeatString = function(string, num) {
    let stringFinal = '';
    if(num < 0)
    {
        return "ERROR";
    }
    for (let i = 0; i < num; i++)
    {
        stringFinal += string;
    }
    return stringFinal;
};

// Do not edit below this line
module.exports = repeatString;
