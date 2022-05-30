const add = function (num1, num2) {
   return num1 + num2;
};

const subtract = function (num1, num2) {
   return num1 - num2;
};

const sum = function (array) {
   let sum = 0;
   sum += array.reduce((acc, cur) => acc + cur, 0);
   return sum;
};

const multiply = function (array) {
   return array.reduce((acc, cur) => acc * cur, 1);
};

const power = function (base, exp) {
   return base ** exp;
};

const factorial = function (num) {
   let sum = 1;
   for (let i = 1; i <= num; i++) {
      sum *= i;
   }
   return sum;
};

// Do not edit below this line
module.exports = {
   add,
   subtract,
   sum,
   multiply,
   power,
   factorial,
};
