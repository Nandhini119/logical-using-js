// Q9. Write a function to return the list of properties (keys) of given object?
let employee = {
name : 'jameson',
empid : '51907',
age : 30 };
let arr = [];
function listOfKeys(employee)
{
  for (let key in employee) {
  arr.push(key);
  }
return arr;
}
listOfKeys(employee);