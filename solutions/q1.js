//Q1. Write a program to display the current date in the following format mm/dd/yyyy?

module.exports = function(out)
{ 
    var today=new Date();
    var  m=today.getMonth()+1;
    var d=today.getDate();
    var y=today.getFullYear();
      out(m+"/"+d+"/"+y);
}
