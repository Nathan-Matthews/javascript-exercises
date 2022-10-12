const palindromes = function (s) {

    //remove all characters that aren't letters
    s = s.replace(/[^A-Za-z0-9]/g, '');

    //All characters to lower case
    s = s.toLowerCase();

    //split string to pieces
    const arrayStrings = s.split("");
   
    //reverse the pieces of the array
    const reverseArray = arrayStrings.reverse();
 
    //rejoin the reversed pieces
    const joinArray = reverseArray.join("");

    //return the result of the initial array equaling the reversed one
    return s == joinArray;
};

// Do not edit below this line
module.exports = palindromes;
