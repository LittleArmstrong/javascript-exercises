const sumAll = function (num1, num2) {
   let sum = 0;
   let min = 0;
   let max = 0;
   if (typeof num1 === "number" && typeof num2 == "number" && num1 >= 0 && num2 >= 0) {
      min = Math.min(num1, num2);
      max = Math.max(num1, num2);
   } else return "ERROR";

   for (let i = min; i <= max; i++) {
      sum += i;
   }
   return sum;
};
// Do not edit below this line
module.exports = sumAll;
