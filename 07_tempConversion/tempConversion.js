const ftoc = function(initialTemp) {
  let finalTemp = Math.round((initialTemp - 32) * 50 / 9) / 10;
  return finalTemp;
};

const ctof = function(initialTemp) {
  let finalTemp = Math.round((initialTemp * 90 / 5) + 320 ) / 10;
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
