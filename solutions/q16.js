//Q16. Flatten the following object :

const arr = [5, [22], [[14]], [[4]],[5,6]];
const temp = [];

function flatten(arrarg) {
    var tem=" ";
    var mystring;
    for (var i=0;i<arrarg.length;i++)
    {
        tem=tem+","+arrarg[i];
         mystring=tem.split(",");
    }
    for(var j=1;j<mystring.length;j++)
    {
         var num=parseInt(mystring[j]);
        temp.push(num);
    }
    return temp;
}
const newArr = flatten(arr);

module.exports = newArr;

