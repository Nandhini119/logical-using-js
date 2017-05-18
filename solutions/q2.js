////Q2: Write a function that accepts numbers as input with spaces in between (such as: 1 2 3 ) and returns highest and the lowest number?
//
function highestAndLowest(numbers){
var number=[];
number=numbers.split(" ");
 number=number.sort();
 console.log(number);
return number[(number.length)-1]+" "+number[0];
}
module.exports = highestAndLowest;

