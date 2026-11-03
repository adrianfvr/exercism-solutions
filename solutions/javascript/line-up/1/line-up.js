//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, num) => {
  let option = "th";
  if (num % 10 === 1 && num % 100 !== 11) option = "st";
  else if (num % 10 === 2 && num % 100 !== 12) option = "nd";
  else if (num % 10 === 3 && num % 100 !== 13) option = "rd";

  return `${name}, you are the ${num}${option} customer we serve today. Thank you!`;
};