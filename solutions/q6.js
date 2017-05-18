// 6. Write a function to find the difference of two arrays?
 
function difference(arr1,arr2) {
var arr3=[];
    for (var i=0;i<arr1.length;i++)
    {
         var x=0;
        for(var j=0;j<arr2.length;j++)
        {
            
            if(arr1[i] === arr2[j])
            {
                arr2.splice(j,1);
                x++;
            }
          
        }
        
        if(x>0)
        {
          arr1.splice(i,1);
          x=0;
          i--;
      }
 
    }
    arr3=arr1.concat(arr2);
   
    return arr3;
}
module.exports = difference;

