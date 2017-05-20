 // Q1. Write a program to display the current date in the following format mm/dd/yyyy?

module.exports = function(out)
{ 
    let today = new Date();
    let  m = today.getMonth()+1;
    let d = today.getDate();
    let y = today.getFullYear();
      out(m + '/' + d + '/' + y);
};
