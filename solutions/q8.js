//Q8. Write a program which accepts email id as an input, which verified the following rules:-
// 1) Should contain Uppercase (A-Z) and lowercase (a-z) English letters.
// 2) Should contain Digits (0-9).
// 3) Should not contain special haracters ! # $ % & ' * + - / = ? ^ ` { | } ~
// 4) Should contain character period or dot provided that it is not the first or last character and it will not come one after the other.

function valid_email(str) {
   var emailvalid=/^([A-Za-z0-9]){1,}([.\-\_])?\@([A-Za-z0-9]){1,}\.([A-Za-z0-9]){2,4}$/;
    if(str.match(emailvalid))
    {
         return true;
    }
    else
        return false;
}
module.exports = valid_email;
