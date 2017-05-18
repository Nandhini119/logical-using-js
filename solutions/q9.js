//Q9. Write a function to return the list of properties (keys) of given object?
var employee = {
name : "jameson",
empid : "51907",
age : 30 };
var arr=[];
function listOfKeys(employee)
{
  
  for (var key in employee) {
   
  arr.push(key);
  }
return arr;
}
console.log(listOfKeys(employee));