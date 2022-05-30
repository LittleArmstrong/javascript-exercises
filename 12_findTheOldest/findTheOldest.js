const findTheOldest = function (persons) {
   return persons.reduce((acc, cur) => {
      const first = (acc?.yearOfDeath || new Date().getFullYear()) - acc.yearOfBirth;
      const second = (cur?.yearOfDeath || new Date().getFullYear()) - cur.yearOfBirth;
      return first > second ? acc : cur;
   });
};

// Do not edit below this line
module.exports = findTheOldest;
