const findTheOldest = function(arr) {
    // Find the current year.
    const currentYear = (new Date()).getFullYear();

    // Create a sorted array by age
    const oldest = arr.sort(function(a,b) {
    if(a.yearOfDeath == null){
        a.yearOfDeath = currentYear;
    }
    if(b.yearOfDeath == null){
        b.yearOfDeath = currentYear;
    }
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;
    return lastGuy > nextGuy ? -1 : 1;
    
    });
    // Return the first entry of that array
    return oldest[0];


};

// Do not edit below this line
module.exports = findTheOldest;
