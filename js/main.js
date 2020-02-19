//Leap year function

const isleapYear = function(year)
{
   if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
     return `The year ${year} is a leap year`;
   } else {
     return `The year ${year} is not leap year`;
   }
 }

console.log(isleapYear(prompt('Enter year')));
