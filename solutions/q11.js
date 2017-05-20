// Q11. Write a function that can accept a string and return the same after arranging it into alphabetical order.
/* Example String: 'webmaster'
Expected Output: 'abeemrstw
*/

let string = 'webmaster';
function sortstring(string)
{
         let arraySplit = string.split("").sort().join("");

        return arraySplit;
}
sortstring(string);