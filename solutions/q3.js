// Q3. Write a program that it takes numbers as input and separate the numbers by inserting dash (-) between two even numbers
// For example if numbers is 12345648 the output should be 123456-4-8.
let nums = '12345648';
module.exports = function(nums, out) {
    let array = [];
    array = nums.split('');
     let result = [];
    for(let i = 0; i < array.length - 1; i++)
    {
        let num1 = array[i];
         let num2 = array[i+1];
          if(num1%2 == 0 && num2%2 == 0)
              {
                  num1 = num1+'-';
                  result.push(num1);
             }
          else
            {
                  result.push(num1);
            }
  }
    out(result.join('') + array[array.length - 1]);
 };
