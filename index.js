//== get a sum of all the numbers present in the string. Please note hard coding to replace characters will not be allowed ==

function sumofString(str) {
  var sum = 0; // intitially it will be 0
  var numbers = str.match(/\d+/g).map(Number); // used to search non-digit character and digit character
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i]; //// for loop is used to calculate the sum up to number.length
  }
  return sum;
}

console.log(sumofString("1,2_9,4-3,4^7,5,*7-,99,8,7,5,9,2,1->80")); //253
