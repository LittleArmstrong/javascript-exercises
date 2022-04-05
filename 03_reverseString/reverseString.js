const reverseString = function (str) {
   let str_array = str.split("");
   let str_reversed = "";
   for (let i = str_array.length - 1; i >= 0; i--) {
      str_reversed += str_array[i];
   }
   return str_reversed;
};
// Do not edit below this line
module.exports = reverseString;
