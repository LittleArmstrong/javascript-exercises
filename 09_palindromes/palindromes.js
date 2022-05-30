const palindromes = function (str) {
   const array = str.match(/[a-zA-Z]/g);
   const l_array = array.map((char) => char.toLowerCase());
   const reversed = [...l_array].reverse();
   return l_array.every((val, i) => val === reversed[i]);
};

console.log(palindromes("teasdgrsgsdfAnt"));

// Do not edit below this line
module.exports = palindromes;
