function toNumberArray(number) {
  let initialArray;

  if (typeof number === 'string') {
    initialArray = number.split(',');
  } else if (Array.isArray(number)) {
    initialArray = number;
  } else {
    return [];
  }

  return initialArray
    .map(item => Number(item.trim()))
    .filter(item => !isNaN(item));
}

console.log(toNumberArray("1, 2"));                         // [1, 2]
console.log(toNumberArray(["1", "2"]));                   // [1, 2]
console.log(toNumberArray(" 11,55,33  "));                // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"]));      // [0.2, -11]