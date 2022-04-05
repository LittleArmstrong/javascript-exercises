const leapYears = function (year) {
   if (typeof year !== "number" || year < 0) return "ERROR";
   let div_by_4 = year % 4;
   let div_by_100 = year % 100;
   let div_by_400 = year % 400;
   if (!div_by_4 && div_by_100) {
      return true;
   } else if (!div_by_400) return true;
   else return false;
};

console.log(leapYears(34992));

// Do not edit below this line
module.exports = leapYears;
