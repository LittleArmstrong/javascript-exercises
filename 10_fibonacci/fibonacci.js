const fibonacci = function (val) {
   const num = Number(val);
   if (num <= 0) return "OOPS";
   if (num === 1 || num === 2) return 1;
   return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(3));

// Do not edit below this line
module.exports = fibonacci;
