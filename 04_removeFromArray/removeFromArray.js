const removeFromArray = function (array, ...remove) {
   let new_array = array.filter((element) => {
      let keep_el = true;
      remove.forEach((el) => {
         if (el === element) keep_el = false;
      });
      return keep_el;
   });
   return new_array;
};

console.log(removeFromArray([1, 2, 3, 4], 1, 3));
// Do not edit below this line
module.exports = removeFromArray;
